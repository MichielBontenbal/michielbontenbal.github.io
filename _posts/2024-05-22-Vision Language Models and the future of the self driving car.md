## Vision Language Models and the future of the self driving car

Self driving cars have been a Silicon Valley darling for many years. Over $100 billion have been invested in this technology with very limited results. There is a whole load of examples of failures. 

# Where does the self driving car fail us?

So many examples! 

Take for example this classic example of a bus with an ad for a politician, that I use in my lectures. The self driving car - a tesla - sees the bus and thinks a man is walking behind it:

![Man on bus with the tesla](https://github.com/MichielBbal/michielbbal.github.io/blob/main/_posts/man_on_bus_tesla.png?raw=true)

A Full Self Driving (FSD) Tesla that sees this, will come to a full stop, possibly causing an incident with a car that's riding behind. 

# What is wrong with the current FSD technology

The last generation of models was based on supervised learning, but this might be a wrong approach. It takes tens of thousands of examples to train a specific model. That seems a lot, but might still not be enough. 

So for example to learn a car to detect the STOP sign, you collect many images, label the images, train a model and the car will detect the STOP sign. Works very nice, in the lab that is.  

# Where the stop sign goes wrong

Take for example this guy on instagram. He wears a t-shirt with a stop sign. Guess what the self-driving taxi does? It recognises the stop sign and stops. WRONG! It couldn't make a distinction between a t-shirt and a real traffic sign. 

See this Instagram post by jasonbcarr: 
[jasonbcarr on insta](https://www.instagram.com/reel/C5O_hV8v9bi/?utm_source=ig_embed)

# Vision Language Models to the rescue! 
Recently a new class of models have become very popular: Vision Language Models or VLM's. These models are a combination, as the name suggests, of vision and language. 

It takes an image as input and it describes the image for you. 

In our first example (man on the bus) the VLM can describe the images and it says that 'it has a large advertisement with a man'.

In our second example of a guy wearing a t-shirt with a stop sign on it it gives the following result: **"The man in the image is standing on the sidewalk, wearing a hat and a stop sign shirt." ** Wow! This  model (kosmos-2) can make the distinction between a real traffic sign and a man wearing at funny t-shirt.

Does this mean we have solved self driving cars? No, far from it. While there is progress, also the VLM's have issues mostly the same as LLM: hallucinations and lack of reasoning. Even with these new vision language models the self driving car has many challenges.

Try this yourself at 
[huggingface spaces](https://huggingface.co/spaces/merve/compare_VLMs)

Try my notebook on the subject so you can see for yourself:

[my notebook](https://github.com/MichielBbal/ollama/blob/main/ollama_llava_self_driving_car.ipynb) 

