# Classifying elephants and generalization in AI models

For the lectures in Computer Vision, my colleague [Stijn Oomes](https://stijnoomes.com/) and I have created a dataset of elephant pictures. Not the wild elephants, but drawings of elephants, toy elephants, cartoon elephants, and so on.

The dataset contains 15 images of elephants. The goal is to see how well various AI models can classify these images as elephants.


### Motivation
Children as young as 3 years old can easily recognize drawings of elephants, even if they have never seen that specific drawing before. This is something we call 'generalization' and this is something AI models struggle with.

Also, our students are often surprised how bad AI models are in recognizing sketches of objects, even if they perform very well on the real images. 

In our classes students train a Convolution Neural Network (CNN) on the ImageNet dataset, which contains millions of real images. However, when they test their trained model on sketches or drawings, the performance drops significantly.

This has wider applications than just recognizing elephants. For example, in medical imaging, AI models need to generalize well to different types of images, such as X-rays or MRIs, which may not look exactly like the images they were trained on.

In order to get a better understanding of how well various AI models can generalize, we created this small dataset of elephant images and tested several popular models on it.

### Models

The following models were used:
1. ResNet
2. Vision Transformer
3. CLIP
4. Florence2

Please see the results and a comparision of the models below.


  Model            |Classified as elephant|Dataset/size|Model Size  | Remarks
 |-----------------|-----------|-------------|---------------|------|
 | ResNet (2015)   | 5 / 15    | ImageNet 1.4 M images | ?          |                
 | ViT (2020)      | 5 / 15    | ImageNet 1.4 M images | 346Mb      |
 | CLIP (2022)     | 8 / 15    | 400 M images          | ?          |Dataset not published
 | Florence2 (2024)| 13 / 15   | 129 M images          | 1.5 Gb     |Highly curated dataset ±5B annotations

### General observations

The traditional model architectures, like ResNet or a Vision Transformer, trained on ImageNet, are quite bad in recognizing drawings of elephants. 

The more modern models, trained on very large web-scale datasets, are much better in recognizing drawings of elephants. 

It needs further analysis and critical evaluation why the newer models CLIP and Florence2 are better in 'generalization' than the older models. 


### Links
Colabs:  [https://drive.google.com/drive/folders/1rKMTRmqcLBpwHoXoTAfq0bjF7tR9QSrV](https://drive.google.com/drive/folders/1rKMTRmqcLBpwHoXoTAfq0bjF7tR9QSrV)

Dataset: [https://huggingface.co/datasets/MichielBontenbal/elephants](https://huggingface.co/datasets/MichielBontenbal/elephants)
