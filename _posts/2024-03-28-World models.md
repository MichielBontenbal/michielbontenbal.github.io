## A glass half full - why image generators need world models

Are AI systems capable of understanding the world around them? At this moment, they seem not to fully understand the world as it is. World models could help.

# What are world models?

In a 2018 paper 'World models' by David Ha and Jurgen Schmidhuberthe term world model was introduced in the field of AI.

Humans develop a mental model of the world based on
what they are able to perceive with their limited senses. The
decisions and actions we make are based on this internal
model. Jay Wright Forrester, the father of system dynamics,
described a mental model as:

*The image of the world around us, which we carry in our
head, is just a model. Nobody in his head imagines all
the world, government or country. He has only selected
concepts, and relationships between them, and uses those
to represent the real system. (Forrester, 1971)*

To handle the vast amount of information that flows through
our daily lives, our brain learns an abstract representation
of both spatial and temporal aspects of this information. 

So we, as humans (and other animals) create an abstract representation of the world around us. AI systems do the same. With big differences between how humans and AI systems do this, off course. 

# Why is this important? 

The current generation of image generators (Dall-e, Midjourney, Stable Diffusion etc) does not have a good mental model of the physical world, resulting in images that are generated wrongly. 

![a glass half full?](https://github.com/MichielBbal/michielbbal.github.io/blob/main/_posts/glass_half_full.jpg?raw=true)

The image above is a glass half full of water. But the image generator fails to capture what we humans all know: gravity makes that the bottom half of the glass is full of water, not the left or right half. And yes, as ChatGPT explained itself, it understands half full in a incorrect way:

# Shade and hands

I'll give two other examples for understanding the physical world: shade and hands. 

Below is are three images of 'a chair on the beach at sunset' (ChatGPT, March 2024). At first glance this looks remarkably good: we see a beach, a sun just above the horizonn, and the shade of the chair on the beach. But a deeper look reveals that the shade is problematic. It creates lines that are not correct. Simple conclusion: it's working but there are issues. 

![Chairs at the beach at sunset (image by dall-e)](https://github.com/MichielBbal/michielbbal.github.io/blob/main/_posts/chair_at_beach.png?raw=true)

The most famous case where GenAI get's things wrong is hands. Hands are difficult. See the examples below. Very often AI generated images has 6 or just 4 fingers. Models do not understand what every 2 year old knows. This is big failure.

![Hands with more than five fingers](https://github.com/MichielBbal/michielbbal.github.io/blob/main/_posts/hands.png?raw=true)

The promise of AI was that AI systems learns rules from examples. As the current generation of AI models fails to learn that a hand has 5 fingers, is it than able to learn anything?

# What's next?
With the rise of Diffusion Video models, such as OpenAI's Sora, creating good world models have become crucial. OpenAI explains this as follows: 

*We find that video models exhibit a number of interesting **emergent capabilities** when trained at scale. These capabilities enable Sora to simulate some aspects of people, animals and environments from the physical world.*

I highlighted 'emergent capabilities' as this might be possible but still seems like a black box to me. The challenge of producing models that have a real understanding of the world might still be some years away.
