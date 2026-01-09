# The letter 'r' in strawberry

Large Language Models (LLM's) are good in producting texts but, as we all know, do not understand what they write. LLM's suffer from two problems. First, they 'hallucinate', which means they produce incorrect answers by making things up. The second problem is that they are very bad at reasoning. They struggle with things that are seemingly easy such as naming how many letters 'r' are in the word 'strawberry'.

GPT-4 (still the worlds highest ranking LLM) struggles with this reasoning task as this example shows you. LLM's in general have many more flaws in simple reasoning tasks.

### Project Strawberry
A month or so ago rumour had it that OpenAI was working on a project called 'Strawberry'. We could only assume it was about tackling this problem. 

And yes, this new model gets the strawberry question right!

### Chain of thought prompting
Prompting - the art of formulating the question to an LLM - has become a new sub-field in the world of AI. So called Chain-of-Thought (CoT) prompting guides LLMs to break down complex problems into a series of intermediate reasoning steps. It aims to improve the model's performance on tasks requiring logic, calculation, and decision-making by structuring the input prompt to encourage step-by-step reasoning.

In most LLM's a user gives specific instructions like "Describe your reasoning in steps" or "Explain your answer step by step" to the prompt. This technique leads the model to make explicit its reasoning process, leading to more accurate and interpretable results.

With OpenAI's release of Strawberry model now called GPT-o1 this CoT prompting has been build into the LLM. And when you use GPT-o1 it shows: the model takes it time, typically 10-20 seconds, to reason about it's answer. 

OpenAI have published just a little bit of information on the inner workings of their model. (No paper was published). However, Tom Yeh of the amazing blog 'AI by hand' has published this high level diagram. It describes a model that uses a 'reward model'. The model generate a whole range or possible answers, that are then ranked. This step is repeated until the model has found the best possible answer. (This is a widely used approach from Reinforced Learning that now is used in LLM's) 

![AI by hand drawing](ai_by_hand.gif)

### Benchmark scores
LLM's are evaluated on a whole range of benchmarks. Most of these benchmarks are quite technical, but I want to mention two benchmarks here. First, from OpenAI blogpost it shows that the model is good at some tasks: maths, coding, scientific questions. (see [OpenAI blog post](https://openai.com/index/learning-to-reason-with-llms/) )

However, others are more critical. The team behind ARC-prize, a challenge to find the AI-model with the best reasoning capabilities, concludes that GPT-o1 is at best mediocre in reasoning. ([Arcprize blogpost](https://arcprize.org/blog/openai-o1-results-arc-prize))


### Conclusion
Are the reasoning capabilities of GPT-o1 a step ahead? Yes, it has improved on several benchmarks on reasoning. But to call it breaktrough goes too far. This is a modest step in the right direction to solve one of the key problems with LLM's. It is better now, but still lots to improve.

Strawberry / GPT-1o is a nice step forward, but not more than that. 

### Read more / sources

- [OpenAI blog post](https://openai.com/index/learning-to-reason-with-llms/) 
- [Arcprize blogpost](https://arcprize.org/blog/openai-o1-results-arc-prize)
- [AI by Hand](https://aibyhand.substack.com/p/openai-strawberry)
- [Chain of Thought Paper](https://arxiv.org/abs/2201.11903)