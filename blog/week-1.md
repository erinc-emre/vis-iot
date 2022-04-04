---
title: 'Ready, take-off!'
date: '2022-03-13'
description: "Wellcome to VISIOT. Let's look at the development process."
cover: 'https://images.pexels.com/photos/159585/stationery-pencil-mechanical-pencil-simple-159585.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=270&w=480'
---

---

## Ignition

Hello and welcome to the first Vis-IoT blog. I am Erinc Emre, and I will briefly talk about the studies carried out this week, the experiences learned and the status of the project.

I started the week with an intense workout. It is very exciting to do a multidisciplinary project using many modern technologies. However, there are many unknowns due to the scope of the project. These unknowns can sometimes be stressful. I started my studies on paper (the power of paper and pen should not be underestimated!)

![Drafts](https://i.imgur.com/1FvFvQh.jpeg)

There are 4 domains in the project;

- Web
- Machine Learning
- Cloud
- IoT

## Web

I first started the project from the web. On the frontend, I chose Next JS because of its performance and community support. I chose the MUI5 library for CSS and component use. Thanks to the components here, I will be able to make data visualization more easily. It should not be forgotten that we have to prepare a big project MVP within 12 weeks. Although visual aesthetics is important, it is not our first priority.

Since I did not have any previous MUI5 experience, I quickly learned the design principles and components. The structure here is based on rapid development with ready-made components, unlike vanilla CSS or Tailwind CSS. But the tradeoff here is that the customization is very limited.

Problems Encountered:
MUI is built as a React library, not for Next JS. For this reason, there are conflicts in the 'Link' and 'Image' components, which are the main features of Next JS. Here, MUI5 produces a solution by overwriting its own components on Next JS. Although it is not very pleasant experience for someone who is using MUI with Next JS for the first time, it is nice to present the solution.
For details:

- [Next JS Image with MUI5](https://stackedit.io/app#)
- [Next JS Link with MUI5](https://mui.com/guides/routing/)

### Practice is essential !

It would be helpful to do a project while learning MUI. That's why I built the site you are on right now. By creating a dynamic site structure with Next JS, I provided automatic page creation and increased the user experience by using MUI.

## AWS

I have only used Vercel for deployment service in my projects until now. However, since the traffic in this project is predominantly on AWS, I decided to make the deployment over there. As a result, I brought the first version of the project live with AWS Amplify, I am very happy with the result so far. I don't know if it's from MUI or AWS, but so far AWS Amplify works faster than projects I've published on Vercel.

Although I have no previous experience on AWS, I was able to use the Amplify service quite easily. In general, AWS, which interests me even more, teaches its services with a lot of free training. While browsing the catalogue, I wanted to learn everything. However, it takes a lot of time to learn more than **200 services**. Well, I started my education with IoT Core.

![AWS](https://i.imgur.com/aq9rgY5.jpeg)

## Git

Git is one of the main tools of a software developer. I take care to use the git system in every project. Since there are multiple areas in this project, I researched how to use the Git system more effectively. Meanwhile, I came across GitHib CLI and GitKraken.

Normally I use Git using Terminal and GitHub web. Git in the terminal provides a general use. We can work with GitHub, Bitbucket or GitLab. However, the GitHub CLI only allows us to work with GitHub. The advantage is that it allows us to use GitHub features like Issue via terminal.

GitKraken, on the other hand, offers a GitHub desktop-like experience. I found it very ideal for those who want to use git visually. Although I did not do a very detailed review, it is clear that it has more features compared to GitHub Desktop. It is a good option especially for those who want to use a visual Git Tool on Linux.

As a result, I will continue to use standard Git via terminal :)

## In a Nutshell

This week I looked at AWS services, I started to make the project's site using Next JS and MUI5, I did research about Git. Next, I will update the website and test the AWS services I have learned on the project.

See you next sunday,\
\
\
\
**_Erinc Emre Celikten_**
