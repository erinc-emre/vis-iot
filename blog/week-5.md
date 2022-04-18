---
title: 'Library Conflict'
date: '2022-04-11'
description: 'Too many dependencies to control'
cover: 'https://images.pexels.com/photos/3402846/pexels-photo-3402846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=270&w=480'
---

---

### Summary
 - Amplify UI Removed
 - NextAuth Added
 - Depencencies are organized
 - AWS Amplify API Integration Research
 
 ---

# Amplify UI

Using AWS Amplify UI is not a good idea. At least for now. It promises a lot of features on paper, but has dependencies that conflict with many modern libraries. The front end world is indeed a very lively place. It is impossible not to drown in technology. Just this week I updated the project with React 18 but this time the MUI5 library created incompatibility. I followed the issue on Github and the update came 3 days later than promised. So what's the result? The system worked fine, but only locally. Amplify UI gave many errors. For a long time I tried to understand why. I edited the given dependency versions. However, the result was not much. I downloaded React 17 version and the result still did not change. Finally I uninstalled the AWS Amplify UI library. And the result is successful. (I now understand why the number of GitHub stars is low) However, this time the advantage of Amplify UI in Authentication disappeared. As an alternative, I decided to use the NextAuth system that I had tried before. At least I know it's not a dependency problem.

### "Setting the stacks to be used is as important as building the system."


# API Integration

Last week, I stated that I would use FastAPI. Running this system on AWS will make sense in terms of speed and integrity. In this direction, I searched for solutions on AWS. I found that we can provide the operation we want with Lambda Functions or with Docker Containers. In addition, the API Gateway solution for controlling APIs caught my attention. In the coming weeks, my attention will definitely be here.

See you next sunday,\
\
\
**_Erinc Emre Celikten_**
