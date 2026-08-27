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

- **[The Lego way of building CNNs](/lego-cnn.html)** — Snap together a
  convolutional neural network for MNIST like Lego bricks: stack and reorder
  convolution, max-pooling, flatten, linear and softmax layers, setting every
  parameter by hand, then pick your learning rate, epochs, loss function and
  optimizer. Each run is a simulated training curve; you get five iterations,
  a leaderboard ranking them by test accuracy, and the PyTorch code for the
  model you built.
