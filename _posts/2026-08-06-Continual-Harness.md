
# But what is a Continual Harness?

An agent, such as Claude Code, is an LLM that is able to use tools, memory, context etc.  Together we call this the Agent Harness.

Agent  = LLM + Harness

In these agents there are what we call loops, e.g.: reason - act - observe. This is a classic loop going back to Barton and Sutton's classic book on reinforced learning. See the image here:

![Agent loop](https://github.com/MichielBontenbal/michielbontenbal.github.io/blob/main/_posts/agentic_loop.png?raw=true)

Agents need these loops to improve  their answer. They can do one round, but if the answer is still unsatisfactory, they'll do another and another. 

A few years back the 'ReAct loop' made the rounds based on this [paper](https://arxiv.org/abs/2210.03629). This loop has just two steps: Reason and Act. From what I have seen, this is the most common agentic loop in use these days. 

But a new paradigm is doing the rounds and this could be really interesting: the Continual Harness. 

This Continual Harness was the main innovation of a new agent, called Prime Agent. 

Prime Agent is an open-source, self-improving coding harness. In English: it’s a tool that lets AI agents write code, test it, learn from the results, and modify their own behavior, all without a human hovering over the keyboard.

Why the fuss? Well, first of all we need to talk about Continual Learning. LLM's, and AI models in general, have one limitation: once they are trained, they are fixed. They cannot learn new things as their weights are frozen. Relearning is possible but as their weights are updated they will also 'forget' stuff. 

Enter the challenge of Continual Learning: we as humans can learn new information, but how can AI's do this?

The core innovation in Prime Agent is something called a Continual Harness. Instead of treating each task as a discrete, stateless interaction, Prime Agent runs inside a persistent Python coding environment. The model can programmatically call tools, spin up sub-agents for delegated tasks, and critically, modify its own approach based on what’s working and what isn’t. No static prompts required.

This builds on foundational research by Alex Zhang, who first outlined a concept called a *Recursive Language Model* (RLM).

The RLM concept was published in a [blog post](https://alexzhang13.github.io/blog/2025/rlm/) in October 2025, before being formalized (together with Tim Kraska and Omar Khattab) in an [arXiv
paper](https://arxiv.org/abs/2512.24601) that December. The Continual Harness [paper](https://arxiv.org/abs/2605.09998) was published in May 2026.

Prime Intellect took these two concepts and turned it into production-ready infrastructure.

And the results? The system scored a baffling 95.5% on the main reasoning challenge ([ARC-AGI-3 benchmark](https://arcprize.org/arc-agi/3)) and surpasses established human-expert baselines, meaning the system outperformed the humans that the benchmark was calibrated against.

I guess we will hear a lot from this new model. I will use it. Read more on it in Prime Intellect's [blog post](https://www.primeintellect.ai/blog/rlm).

P.S. to me this also sounds like early work on [Double Loop learning](https://en.wikipedia.org/wiki/Double-loop_learning) by Chris Argyris, who studied organisational learning not AI.  