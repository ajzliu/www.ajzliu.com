---
layout: "../layouts/MarkdownPage.astro"
title: "Austin Liu"
author: "Austin Liu"
---

Welcome to my website! I'm currently a senior at Los Altos High School interested in data science and machine learning and passionate about solving problems. I've previously lived in neighboring Mountain View, California and Nanjing, China. I'm proficient in Python, Java, HTML/CSS, PyTorch, matplotlib, seaborn, pandas, numpy, and scikit-learn. I have additional experience with Flutter, C, the Wolfram Language, JavaScript, OpenCV, TensorFlow, Pillow, Bash, and LaTeX.

我也会说中文！

When I'm not studying or working on organizing [Los Altos Hacks](https://www.losaltoshacks.com/), you can find me exploring new places or digging into a new book. I also love to teach and inspire people, and I've worked with [Silicon Valley Youth](https://www.siliconvalleyyouth.com/) and [StreetCode Academy](https://streetcode.org/) for over four years teaching Python to K-12 students. If you're looking for an detail-oriented, experienced researcher to join your team, please reach out using the email on my CV.

## Research

### [Spatiotemporal disease case prediction using contrastive predictive coding](https://dl.acm.org/doi/10.1145/3557995.3566122)

Advised by Dr. Andreas Züfle at Emory University and Dr. Hoang Duy Thai at George Mason University

_Published in the SpatialEpi '22: Proceedings of the 3rd ACM SIGSPATIAL International Workshop on Spatial Computing for Epidemiology_

#### Abstract Excerpt

> ...we propose Spatial Probabilistic Contrastive Predictive Coding (SP-CPC) which leverages Contrastive Predictive Coding (CPC), an unsupervised time-series representation learning approach. We augment CPC to incorporate a covariate mobility matrix into the loss function, representing the relative number of individuals traveling between each county on a given day. The proposal distribution learned by the algorithm is then sampled by the Metropolis-Hastings algorithm to give a final prediction of the number of COVID-19 cases. We find that the model applied to COVID-19 data can make accurate short-term predictions, more accurate than ARIMA and simple time-series extrapolation methods, one day into the future. However, for longer-term prediction windows of seven or more days into the future, we find that our predictions are not as competitive and require future research.

View the code [here](https://github.com/ajzliu/SP-CPC)!

### [Securing and Improving the Internet Architecture](https://doi.org/10.5539/cis.v13n4p42)

Advised by Dr. Fahad Dogar at Tufts University

_Published in Computer and Information Science_

#### Abstract Excerpt

> The information transfer protocol that supports the modern Internet with its hundreds of thousands of petabytes per month to billions of Internet users across the world was designed in 1981, and it lacks the capacity to properly ensure the security and stability of the Internet today. Features such as the prevention of network attacks, a large address space for the increasing number of devices, verification of the source of an Internet request, and so on are all absent from the current architecture. This paper seeks to review, summarize, and compare six proposals submitted to address the issues IP faces: the Accountable Internet Protocol, the Expressive Internet Architecture, MobilityFirst, Passport, StopIt, and the Traffic Validation Architecture. Finally, the paper details a protocol design that not only is feasible to adopt with the present infrastructure/computing power but also addresses some of the pressing issues of IP, with particular focus on the address space, mitigation of network attacks, and source verification.

## Unpublished Research

### [Modeling Energy Demand with Neural Networks](/energy.pdf)

Advised by Dr. Jordan T. Ash at Microsoft Research

I conducted research in the applications of machine learning with Jordan T. Ash, a postdoctoral researcher at Microsoft Research. Specifically, I investigated the applications of modern machine learning models (recurrent neural networks, multilayer perceptrons, etc.) in predicting energy consumption, and demonstrated a deep learning model that was able to achieve an R^2 = 0.945 in predicting energy consumption.
