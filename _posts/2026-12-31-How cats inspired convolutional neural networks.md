## How cats inspired convolutional neural networks

Convolutional Neural Networks (CNNs) have revolutionized the field of computer vision, enabling machines to recognize and classify images with remarkable accuracy. The inspiration for CNNs is based on research on the brains of cats from the 1950's.

### Early brain research
In the 1950s, neuroscientists David Hubel (🇨🇦) and Torsten Wiesel (🇸🇪) had a lab where they were doing brainresearch. The animals they used for their research were cats.

They were interested in a certain part of the brain called the visual cortex, which is responsible for processing visual inputs. 

With a bit of serendipity, they discovered how the visual cortex processes images. The cats eyes were focused on a screen that displayed various patterns of light and dark. While they hoped the cats would respond to black dots, they discovered that the cats responded when a line - by accident - was shown on the screen. Have a look at this video:

[![How cats inspired CNNs (YouTube)](https://img.youtube.com/vi/IOHayh06LJ4/0.jpg)](https://www.youtube.com/watch?v=IOHayh06LJ4)

Hubel and Wiesel found that certain neurons in the visual cortex responded specifically to edges, lines, and angles. They called these neurons "simple cells." Other neurons, which they called "complex cells," responded to more complex patterns, such as combinations of lines and edges.

This was the discovery of what we call 'hierarchical vision' processing: simple features are detected first, and then combined to form more complex structures.

### From cats to convolutional neural networks
This idea of of 'hierarchical vision' was the basis for the development of <i>>Convolutional Neural Networks (CNNs) </i> in the 1980s and 1990s.    

In the 1980's a Japanase researcher named Kunihiko Fukushima developed a model called the Neocognitron. The Neocognitron, however, never left the lab and it did not really work.

In the 1990's it was Yann LeCun (🇫🇷) who built upon the ideas of Hubel and Wiesel, as well as Fukushima's Neocognitron, to create the first practical CNN model. Hie model, called <i>LeNet</i>, was designed to recognize handwritten digits and was successfully used by the US Postal Service to read zip codes on mail.

LeCun not only developed a model, but created a dataset of 70,000 labeled images of handwritten digits, called the MNIST dataset. The development of datasets like MNIST was crucial for training and evaluating neural network ever since. 

It was not until the 2010's, however, that CNNs really took off. With the advent of powerful GPUs and large datasets like ImageNet, CNNs achieved breakthrough performance in image classification tasks.

LeCun received the Turing Award in 2018, together with Geoffrey Hinton (🇨🇦) and Yoshua Bengio (🇨🇦), for their work on deep learning.

### Do not gerenalize too much
When I teach my students about CNNs, I always stress that CNNs mimic only a very small part of the brain. This part of the brain is only responsible for processing visual input, nothing else.

Other parts of our brain are responsible for other visual tasks, such as recognizing faces, colors, or motion. Also we use another part of the brain to generalize and give meaning to what we see. CNNs do not do any of that!

### Conclusion
The early research on cats by Hubel and Wiesel led to the understanding of how the visual cortex processes visual input. 

This understanding of the natural brain led to the development of the early artificial brain models.

But as Hubel and Wiesel learned about a very small and specific part of the brain, CNNs are also only good at a very small and specific task: image recognition. 

We should not generalize too much: CNN's are only good at recognizing objects it is trained on and are NOT capable of generalization.  

More on generalization in neural networks in a future blog post.

<i>AI assistend in writng this article. </i>
