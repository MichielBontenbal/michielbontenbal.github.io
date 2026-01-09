# How to choose your AI model
<i>Cross posted from my Huggingface blog.</i>

My students often ask me how they best can select the right model for their use case. With the exploding number of models this is good question. Here I try to explain some of the steps you can take to select the right model. 

### 1. Understand your use case.
   
Before diving into the world of AI models, it's essential to clearly define your project's use case. Consider the following aspects:

- This blog post focuses mostly on Natural Language Processing with LLM's.
- Identify the key performance indicators (KPIs) that matter most. Think about accuracy, precision and speed. If speed is important, do Not use a reasoning model (as they take longer time).

### 2. Check leaderboards
   
Leaderboards can be very helpful in comparing AI models based on standardized benchmarks. Websites like <a href="https://www.euroeval.com">EuroEval</a> and <a href="https://www.lmsys.org">lmsys.org</a> provide valuable insights:

- EuroEval: Offers benchmarks specifically for European languages, including Dutch. This can be particularly useful if your application is language-specific.
- LMSYS: Also features an "arena" where models are scored based on human evaluations and algorithms, similar to ranking systems in sports like chess or tennis.
  
### 3. Privacy, ethics and geopolitics
  
- Privacy: Ensure the model complies with privacy regulations such as GDPR.
  
- Ethics: Consider the ethical implications of using a particular model. Does it align with your values and the values of your users? 
 
- Geopolitics: Depending on your use case and/or your client wishes, you might opt for a European model over a Chinese one.
  
### 4. Resources: size, energy and costs

AI models vary significantly in terms of resource requirements:

- Size: Larger models might offer better performance but require more computational resources.
- Energy consumption: Consider the environmental impact of running large models. Opt for energy-efficient models if sustainability is a priority.
- Cost: How expensive are the models? Do you pay per million tokens or a flat flee? Many models are free. Do you use an API or do you rent GPU space? Can you run the model locally on your device, say with a tool like Ollama?
  
### 5. Testing and validation
   
No matter how promising a model looks, it's crucial to test it with your specific use case and dataset:

- Custom testing: Run the model on your dataset to see how well it performs in your specific context.
- Maintainability: Design your application to be flexible, allowing for easy model swapping in the future. This ensures that you can upgrade or change models as needed without significant overhaul.
- Why not vibe code an LLM Arena yourself? 

### 6. Keep staying ahead
   
The field of AI is rapidly evolving, and newer models often outperform older ones:

## Conclusion
As we have seen, there are many options you can choose from. Yes, OpenAI might be the default option, but there is more than their models. Enjoy the ride and happy coding!  


<i>AI assisted in writing this article. </i>