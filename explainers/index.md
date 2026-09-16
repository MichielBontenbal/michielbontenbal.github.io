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

- **[How a neuron learns](/explainers/neuron_learning_explainer.html)** — Watch a single
  neuron learn to detect "is the number big?", step by step, as it adjusts its
  weights through training.

- **[From text to embeddings](/explainers/text_to_embeddings_pipeline.html)** — The full
  pipeline that turns a sentence step by step into the numbers an AI model can
  understand, ending in dense embeddings.

- **[Perceptron visualiser](/explainers/perceptron_visualiser.html)** — A live Streamlit
  app (running entirely in your browser via [stlite](https://github.com/whitphx/stlite))
  where you set the inputs, weights, bias and activation function of a single
  neuron and watch how its output changes. Note: the first load takes a few
  seconds while the Python environment downloads.

- **[Transformer architecture explorer](/explainers/streamlit_transformer.html)** — A live
  Streamlit app (also via [stlite](https://github.com/whitphx/stlite)) that walks
  through the components of the Transformer architecture — embeddings, positional
  encoding, multi-head attention, feed-forward layers and more — with a short quiz
  to test your understanding. The first load takes a few seconds.

- **[The Lego way of building CNNs](/explainers/lego-cnn.html)** — Snap together a
  convolutional neural network for MNIST like Lego bricks: stack and reorder
  convolution, max-pooling, flatten, linear and softmax layers, setting every
  parameter by hand, then pick your learning rate, epochs, loss function and
  optimizer. Each run is a simulated training curve; you get five iterations,
  a leaderboard ranking them by test accuracy, and the PyTorch code for the
  model you built.

- **[Going back in time: run GPT-2 like it's 2019](/explainers/gpt2_in_browser.html)** — Type a prompt and watch
  GPT-2 continue it, token by token, with sliders for temperature, top-k,
  repetition penalty and length. The 124M-parameter model itself runs on your
  own machine: a quantised ONNX export executed by
  [Transformers.js](https://github.com/xenova/transformers.js) and ONNX Runtime
  Web (WebAssembly), in a Web Worker so the page stays responsive. No server, no
  API key — your prompt never leaves your laptop. The first run downloads about
  128 MB of weights, which the browser then caches.

- **[Convolutions with MNIST](/explainers/convolutions_mnist.html)** — Work through a
  convolution one step at a time on a real handwritten digit: pick an MNIST
  image, turn it into the 28 × 28 matrix of pixel values the network actually
  sees, choose a 3 × 3 or 5 × 5 kernel (vertical or horizontal line detection,
  blur, sharpen, outline — or type your own weights), and see the resulting
  feature map. Hovering any output pixel highlights the patch it came from and
  spells out the multiply-and-add behind it. The digits are real MNIST test
  images exported with torchvision, so the page needs no install and no server.

- **[History of LLMs: BabyAGI, the first steps towards reasoning and agentic AI](/explainers/baby_agi.html)** — A
  rebuild of [BabyAGI](https://github.com/yoheinakajima/babyagi_archive), the 2023
  script that started the first wave of AI agents. Type an objective and watch three
  agents work in a loop: one executes a task, one invents new tasks from the result,
  and one reorders the to-do list. The agent log shows the exact prompt behind every
  step and how the code parses the answer. Instead of GPT-3.5, each step runs on
  Qwen3-1.7B through [Transformers.js](https://huggingface.co/docs/transformers.js)
  and WebGPU on your own machine. The page first checks your hardware: it needs a
  GPU with about 8 GB of memory, and cannot run on a computer without one. The
  first run downloads about 1.4 GB of weights, which the browser then caches.

- **[Explainable AI: a primer](/explainers/xai-explainer.html)** — Lecture notes
  in five tabs on why and how we explain AI models: the foundations of XAI,
  Shapley values and SHAP, saliency methods for computer vision such as Grad-CAM
  and Integrated Gradients, a Grad-CAM implementation in PyTorch, and what does
  (and doesn't) work for explaining LLMs, from SHAP on text to mechanistic
  interpretability.

- **[Explainable AI for computer vision](/explainers/xai_computer_vision.html)** — Upload
  a photo, or pick one of the sample images, and let ResNet-18 classify it into
  the 1000 ImageNet classes. Then compare three explanations of that prediction:
  Grad-CAM, SHAP and Integrated Gradients, each shown as a heatmap on top of the
  image. Everything runs in your browser with
  [TensorFlow.js](https://www.tensorflow.org/js), so your images are never
  uploaded. The first visit downloads about 47 MB of model weights from Hugging
  Face, which the browser then caches.
