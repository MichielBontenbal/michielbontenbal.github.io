// word2vec in the browser: a port of server.py's API, working on the 8-bit vectors from export_static.py.
// Every query returns the same shape of data the Python server returned, so the UI is shared.

const W2V = (() => {
  const D = 300;
  let words, index, Q, norms, N;

  // ---------------------------------------------------------------- loading

  async function fetchBytes(url, expected, onProgress) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Could not load ${url} (${res.status})`);
    const total = +res.headers.get("content-length") || expected;
    const out = new Uint8Array(expected);
    const reader = res.body.getReader();
    let got = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      out.set(value, got);
      got += value.length;
      onProgress?.(got / total);
    }
    if (got !== expected) throw new Error(`${url}: expected ${expected} bytes, got ${got}`);
    return out.buffer;
  }

  async function load(base, onProgress) {
    const res = await fetch(base + "vocab.txt");
    if (!res.ok) throw new Error(`Could not load vocab.txt (${res.status})`);
    words = (await res.text()).split("\n");
    N = words.length;
    index = new Map(words.map((w, i) => [w, i]));
    Q = new Int8Array(await fetchBytes(base + "vectors.bin", N * D, onProgress));
    norms = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      let s = 0;
      for (let j = i * D, e = j + D; j < e; j++) s += Q[j] * Q[j];
      norms[i] = Math.sqrt(s);
    }
    return { vocab: N, dim: D };
  }

  // ---------------------------------------------------------------- vector helpers

  const unit = (w) => {
    const i = index.get(w), v = new Float32Array(D), n = norms[i];
    for (let j = 0; j < D; j++) v[j] = Q[i * D + j] / n;
    return v;
  };
  const dot = (a, b) => { let s = 0; for (let j = 0; j < a.length; j++) s += a[j] * b[j]; return s; };
  const norm = (a) => Math.sqrt(dot(a, a));
  const cos = (a, b) => dot(a, b) / (norm(a) * norm(b));
  const combine = (terms) => {  // sum of sign * unit(word)
    const v = new Float32Array(D);
    for (const [s, w] of terms) { const u = unit(w); for (let j = 0; j < D; j++) v[j] += s * u[j]; }
    return v;
  };

  /** Cosine similarity of vec against the whole vocabulary. */
  function allSims(vec) {
    const n = norm(vec), sims = new Float32Array(N);
    for (let i = 0, o = 0; i < N; i++, o += D) {
      let s0 = 0, s1 = 0, s2 = 0, s3 = 0;  // unrolled: ~25% faster in V8 (D = 300 is divisible by 4)
      for (let j = 0; j < D; j += 4) {
        s0 += Q[o + j] * vec[j]; s1 += Q[o + j + 1] * vec[j + 1];
        s2 += Q[o + j + 2] * vec[j + 2]; s3 += Q[o + j + 3] * vec[j + 3];
      }
      sims[i] = (s0 + s1 + s2 + s3) / (norms[i] * n);
    }
    return sims;
  }

  function nearest(sims, topn, exclude) {
    const top = [];  // sorted [{i, sim}] of length <= topn
    for (let i = 0; i < N; i++) {
      const s = sims[i];
      if (top.length === topn && s <= top[topn - 1].sim) continue;
      if (exclude.has(words[i])) continue;
      let k = top.length;
      while (k > 0 && top[k - 1].sim < s) k--;
      top.splice(k, 0, { i, sim: s });
      if (top.length > topn) top.pop();
    }
    return top.map(({ i, sim }) => ({ word: words[i], sim }));
  }

  function rankOf(sims, word, exclude) {
    const target = sims[index.get(word)];
    let r = 1;
    for (let i = 0; i < N; i++) if (sims[i] > target && !exclude.has(words[i])) r++;
    return r;
  }

  // ---------------------------------------------------------------- words

  /** Vocabulary key for a typed word (case-sensitive vocabulary, _ for phrases). */
  function resolve(word) {
    const w = word.trim().replace(/ /g, "_");
    const cap = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    // typed in lowercase? prefer the Capitalised form when it is far more frequent (france -> France).
    // The vocabulary is sorted by frequency, so index = rank.
    if (w === w.toLowerCase() && index.has(w) && index.has(cap) && index.get(cap) * 20 < index.get(w)) return cap;
    const title = w.toLowerCase().replace(/(^|_)([a-z])/g, (m, a, b) => a + b.toUpperCase());
    for (const c of [w, w.toLowerCase(), cap, title, w.toUpperCase()]) if (index.has(c)) return c;
    return null;
  }

  function resolveAll(list) {
    const missing = list.filter((w) => resolve(w) === null);
    if (missing.length) throw new Error(`Not in the ${N.toLocaleString()}-word vocabulary: ${missing.join(", ")}`);
    return list.map(resolve);
  }

  // ---------------------------------------------------------------- PCA

  /** Eigen-decomposition of a symmetric matrix (cyclic Jacobi). Returns [{value, vector}] sorted descending. */
  function eigSym(A) {
    const n = A.length, a = A.map((r) => r.slice()), V = a.map((_, i) => a.map((_, j) => +(i === j)));
    for (let sweep = 0; sweep < 60; sweep++) {
      let off = 0;
      for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += a[p][q] * a[p][q];
      if (off < 1e-18) break;
      for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
        if (Math.abs(a[p][q]) < 1e-15) continue;
        const theta = (a[q][q] - a[p][p]) / (2 * a[p][q]);
        const t = Math.sign(theta || 1) / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
        const c = 1 / Math.sqrt(t * t + 1), s = t * c;
        for (let k = 0; k < n; k++) {
          const akp = a[k][p], akq = a[k][q];
          a[k][p] = c * akp - s * akq; a[k][q] = s * akp + c * akq;
        }
        for (let k = 0; k < n; k++) {
          const apk = a[p][k], aqk = a[q][k];
          a[p][k] = c * apk - s * aqk; a[q][k] = s * apk + c * aqk;
        }
        for (let k = 0; k < n; k++) {
          const vkp = V[k][p], vkq = V[k][q];
          V[k][p] = c * vkp - s * vkq; V[k][q] = s * vkp + c * vkq;
        }
      }
    }
    return a.map((_, i) => ({ value: a[i][i], vector: V.map((r) => r[i]) })).sort((x, y) => y.value - x.value);
  }

  const meanOf = (rows) => {
    const m = new Float32Array(D);
    for (const r of rows) for (let j = 0; j < D; j++) m[j] += r[j] / rows.length;
    return m;
  };

  /** Principal directions of a few rows, via the small n x n Gram matrix instead of the 300 x 300 covariance. */
  function principalDirections(rows) {
    const m = meanOf(rows), C = rows.map((r) => r.map((x, j) => x - m[j]));
    const eig = eigSym(C.map((a) => C.map((b) => dot(a, b))));
    return eig.filter((e) => e.value > 1e-8).map(({ value, vector }) => {
      const d = new Float32Array(D);
      C.forEach((row, i) => { for (let j = 0; j < D; j++) d[j] += (vector[i] * row[j]) / Math.sqrt(value); });
      return d;
    });
  }

  /** PCA fitted on the 'focus' points, applied to all points. Replaces p.vec with x, y, z. */
  function project(points, fitOn) {
    const X = points.map((p) => p.vec), F = fitOn.map((i) => X[i]);
    const comps = principalDirections(F).slice(0, 3);
    if (comps.length < 3) {  // too few focus points for 3 axes: add orthogonalised directions from all points
      for (const e of principalDirections(X)) {
        if (comps.length === 3) break;
        const r = e.slice();
        for (const c of comps) { const k = dot(r, c); for (let j = 0; j < D; j++) r[j] -= k * c[j]; }
        const n = norm(r);
        if (n > 0.3) comps.push(r.map((x) => x / n));
      }
    }
    const m = meanOf(F);
    for (const p of points) {
      const c = p.vec.map((x, j) => x - m[j]);
      [p.x, p.y, p.z] = [0, 1, 2].map((k) => (comps[k] ? dot(c, comps[k]) : 0));
      delete p.vec;
    }
  }

  const simMatrix = (list) => { const U = list.map(unit); return U.map((a) => U.map((b) => dot(a, b))); };
  const vecRow = (label, v) => ({ label, values: Array.from(v) });

  // ---------------------------------------------------------------- queries

  function parseExpression(text) {
    let t = text.replace(/−/g, "-").replace(/\+/g, " + ");
    t = t.replace(/(^|\s)-(?=\S)/g, "$1- ");  // '-man' -> '- man', but keep 'e-mail'
    const toks = t.split(/\s+/).filter(Boolean);
    if (!toks.includes("+") && !toks.includes("-")) return null;
    const terms = [];
    let sign = 1;
    for (const tok of toks) {
      if (tok === "+") sign = 1;
      else if (tok === "-") sign = -1;
      else { terms.push([sign, tok]); sign = 1; }
    }
    return terms;
  }

  function analogy(text, topn) {
    let terms = parseExpression(text), expected = null;
    if (terms === null) {
      const ws = text.replace(/[:,]/g, " ").split(/\s+/).filter(Boolean);
      if (ws.length !== 3 && ws.length !== 4)
        throw new Error("Type 3 words (a b c → a is to b as c is to ?), 4 words to check an analogy, " +
                        "or an expression like  king - man + woman");
      const [a, b, c] = ws;
      terms = [[1, b], [-1, a], [1, c]];
      expected = ws[3] ?? null;
    }
    const resolved = resolveAll(terms.map(([, w]) => w).concat(expected ? [expected] : []));
    terms = terms.map(([s], i) => [s, resolved[i]]);
    if (expected) expected = resolved[resolved.length - 1];
    const inputs = new Set(terms.map(([, w]) => w));

    const resultVec = combine(terms);
    const sims = allSims(resultVec), results = nearest(sims, topn, inputs);
    const best = results[0].word;
    const label = terms.map(([s, w]) => `${s < 0 ? "−" : "+"} ${w}`).join(" ").replace(/^\+ /, "");
    const isClassic = terms.length === 3 && terms.map(([s]) => s).join() === "1,-1,1";
    const out = { expression: label, results, classic: null, expected: null };
    if (expected) out.expected = { word: expected, rank: rankOf(sims, expected, inputs), sim: cos(resultVec, unit(expected)) };
    const answer = expected || best;

    const points = [], seen = new Set();
    const add = (word, role, vec, text) => {
      if (seen.has(word)) return;
      seen.add(word);
      points.push({ word: text || word, role, vec: vec || unit(word) });
    };
    for (const [, w] of terms) add(w, "input");
    add(answer, "answer");
    if (expected && best !== expected) add(best, "result");
    add("__synthetic__", "synthetic", resultVec, label);
    const focus = points.map((_, i) => i);
    for (const r of results.slice(1)) add(r.word, "result");
    project(points, focus);
    out.points = points;

    const rows = terms.map(([, w]) => vecRow(w, unit(w)));
    rows.push(vecRow(answer, unit(answer)), vecRow(`= ${label}`, resultVec));
    if (isClassic) {
      const [b, a, c] = terms.map(([, w]) => w);
      const sub = (x, y) => { const ux = unit(x), uy = unit(y); return ux.map((v, j) => v - uy[j]); };
      const d1 = sub(b, a), d2 = sub(answer, c);
      rows.push(vecRow(`${b} − ${a}`, d1), vecRow(`${answer} − ${c}`, d2));
      out.classic = { a, b, c, d: answer, offset_cos: cos(d1, d2) };
      out.arrows = [[a, b, "offset"], [c, answer, "offset"], [a, c, "side"], [b, answer, "side"]];
    } else out.arrows = [];
    out.vectors = rows;
    const mwords = terms.map(([, w]) => w).concat([answer]);
    out.matrix = { words: mwords, values: simMatrix(mwords) };
    return out;
  }

  function neighbors(text, topn) {
    let ws = text.replace(/,/g, " ").split(/\s+/).filter(Boolean);
    if (!ws.length) throw new Error("Type one or more words");
    ws = [...new Set(resolveAll(ws.slice(0, 6)))];
    const groups = ws.map((w) => ({ word: w, results: nearest(allSims(unit(w)), topn, new Set([w])) }));
    const points = ws.map((w) => ({ word: w, role: "input", group: w, vec: unit(w) }));
    const seen = new Set(ws);
    for (const g of groups) for (const r of g.results) {
      if (seen.has(r.word)) continue;
      seen.add(r.word);
      points.push({ word: r.word, role: "result", group: g.word, vec: unit(r.word) });
    }
    project(points, points.map((_, i) => i));
    return {
      groups, points,
      arrows: groups.flatMap((g) => g.results.map((r) => [g.word, r.word, "link"])),
      vectors: ws.map((w) => vecRow(w, unit(w))),
      matrix: ws.length > 1 ? { words: ws, values: simMatrix(ws) } : null,
    };
  }

  function oddone(text) {
    let ws = text.replace(/,/g, " ").split(/\s+/).filter(Boolean);
    if (ws.length < 3) throw new Error("Type at least 3 words");
    ws = [...new Set(resolveAll(ws.slice(0, 12)))];
    const U = ws.map(unit), mean = meanOf(U);
    const sims = U.map((u) => cos(u, mean));
    const order = ws.map((_, i) => i).sort((a, b) => sims[a] - sims[b]);
    const points = ws.map((w, i) => ({ word: w, role: i === order[0] ? "odd" : "input", vec: U[i] }));
    points.push({ word: "mean", role: "synthetic", vec: mean });
    project(points, points.map((_, i) => i));
    return {
      odd: ws[order[0]],
      ranking: order.map((i) => ({ word: ws[i], sim: sims[i] })),
      points,
      arrows: ws.map((w) => ["mean", w, "link"]),
      vectors: ws.map((w, i) => vecRow(w, U[i])).concat([vecRow("= mean", mean)]),
      matrix: { words: ws, values: simMatrix(ws) },
    };
  }

  const clampN = (n) => Math.max(1, Math.min(n, 30));
  return {
    load,
    query: (mode, text, topn) =>
      mode === "analogy" ? analogy(text, clampN(topn)) : mode === "neighbors" ? neighbors(text, clampN(topn)) : oddone(text),
  };
})();
