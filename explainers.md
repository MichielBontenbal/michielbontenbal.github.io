---
layout: page
title: Interactive Explainers
permalink: /explainers/
---

A small collection of interactive, in-browser explainers I built to help make
core ideas in machine learning and AI more intuitive. Each one is a
self-contained page you can click through at your own pace — no installation,
no code, just open and explore.

## Available explainers

- **[How a neuron learns](/neuron_learning_explainer.html)** — Watch a single
  neuron learn to detect "is the number big?", step by step, as it adjusts its
  weights through training.

- **[The deep learning training loop](/chollet_deep_learning_flow.html)** — A
  tabbed walkthrough of how a deep learning model learns: input, forward pass,
  predictions, loss function, backpropagation, and the full training loop
  (after François Chollet's diagram).

- **[From text to vectors](/text_to_vectors_explainer.html)** — Type a sentence
  and watch it transform: tokenization, building a vocabulary, and turning
  tokens into one-hot vectors.

- **[From text to embeddings](/text_to_embeddings_pipeline.html)** — The full
  pipeline that turns a sentence step by step into the numbers an AI model can
  understand, ending in dense embeddings.

- **[Perceptron visualiser](/perceptron_visualiser.html)** — A live Streamlit
  app (running entirely in your browser via [stlite](https://github.com/whitphx/stlite))
  where you set the inputs, weights, bias and activation function of a single
  neuron and watch how its output changes. Note: the first load takes a few
  seconds while the Python environment downloads.

- **[Transformer architecture explorer](/streamlit_transformer.html)** — A live
  Streamlit app (also via [stlite](https://github.com/whitphx/stlite)) that walks
  through the components of the Transformer architecture — embeddings, positional
  encoding, multi-head attention, feed-forward layers and more — with a short quiz
  to test your understanding. The first load takes a few seconds.
