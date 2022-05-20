# Progress Report 20.05.2022


## Development Fields

### Web

The web is a very important area for this project. For accessibility, I plan to run the project on the web in the medium term. In this direction, I learned and implemented the technologies I needed.

#### Chalanges:


- **Dependency Conflict**

    I am using AWS Amplify services in the project, I decided to use AWS Amplify UI Companents for ease of control. It was very attractive to have an authentication component that is highly compatible with the AWS Cognito service. However, there were version conflicts with MUI5, the actual UI Companent Library I used in the project. At this time, with the release of React 18, all repositories began to renew themselves. While in the complex situation, I tried to find the optimum versions by manually changing the versions of the packages. Unfortunately, this process is too long, and as a result of the issues I followed on GitHub, I decided to remove AWS Amplify UI Compananet. This was going to be about a week of regression for me, but I had no other choice. Afterwards, I tried the Next-Auth system, but it provided much more than the project's needs and made the process more complex. For this reason, I preferred the Auth0 service. Now the system is working with Auth0. In the end, it was a problem that wasted a lot of my time, but this situation taught me the importance of versions and compatibilities as well as technologies to be used in projects.

- **Dynamic Pages**

    Dynamic page structure is an important technology for users to see the details of their devices connected to the system in the most efficient way. There are very few frameworks that support this feature. I learned this feature in Next JS and implemented it by creating a blog called 'Sunday Dev Blog' as an example. The number of sources on this subject was very few and I tried to understand the process by examining the source codes at some points. In the end, I built the front-end system ready to use the dynamic structure in the next stages. Building a dynamic infrastructure is a longer and more difficult process compared to static structures.



#### Outcomes:

- Authentication services are currently running on the web.
- The place where the ML API will connect is determined and ready.
- While the future infrastructures are ready, the features within the scope of the project have been completed.

- I learned that my front-end development is a more difficult task than I expected, especially the importance of data compatibility with the back-end. The front-end world is moving fast and staying up-to-date is very difficult. You have many alternatives for an application and sometimes it can be difficult to choose.

### Machine Learning

Object Detection An important part of the project. Although I had some theoretical knowledge in this field before, I had not done much development on a framework before. At this point, I improved myself by progressing with the TensorFlow training on Udacity.

#### Chalanges: 

- **Mathematics and Statistics**

    Within the scope of this project, only Object Detection will be used, but there is no such thing as just learning Objet Detection! Unlike the front-end world, Machine Learning is quieter in technology, but the topics are deeper. At some points, Mathematics and Statistics were really challenging. It is easy to develop a system with a guide, but when I wanted to write a code by myself, I had some difficulties in some places. At these points, I developed myself by supporting each other on the community in Udacity. I took ML-focused Mathematics and Statistics courses on hyperskill.org because I felt that I needed to improve myself more in these areas.

- **Hardware**

    A powerful NVIDIA GPU is very useful when training ML models, unfortunately I do not have one of these GPUs. For this reason, I generally tried to do the trainings on Google Colab. However, sometimes I got stuck on the daily limit count. Unfortunately, there is no ideal solution in this regard. If my need for model training increases in the future, Colab Pro can be considered. Another GPU issue is on the IoT device. Due to the chip crisis these days, I've had a hard time finding a suitable IoT device. As a result, I recently bought the Raspberry Pi 400 - 4GB model. This model has almost the same features as the RBP 4B. The fact that it is 4 GB will not prevent the models that want 64 bits from working, but since the power of the processor is very limited, there must be solutions to increase performance. Now I have 2 options; Running models with TensorFlow Lite or forcing the system to run full-size models. I will make my decision on this issue after looking at the performance metrics.

#### Outcomes:

- Machine learning is deep in theory, but overall an enjoyable field in practice. I am in the model development phase of the project, I plan to complete the model within 1 week and integrate it into the system. Now I am doing the cleaning and augmentation process on the data that I will use for training.

### Cloud



#### Chalanges:

#### Outcomes:

### Network



#### Chalanges:

#### Outcomes:

### Hardware



#### Chalanges:

#### Outcomes:

## Plan until the end of the term





## Medium term plan