# Altschool Frontend Second Semester Examination Project

This is a web application solution that lists all my repositories on GitHub and allows you to search and move between pages. The Error boundary was properly implemented with the 404 page.

## Table of contents

- [Overview](#overview)
  - [Project Question](#project-question)
  - [Pages](#pages)
- [Process](#process)
  - [Technology Used](#technology-used)
  - [Lessons Learnt](#lessons-learnt)
  - [Further Development](#further-development)
- [How to run this on your Local PC](#how-to-run-this-on-your-local-pc)


## Overview

### Project question
Implement a Web App using GitHub API to fetch your GitHub repositories portfolio

1. Show a page listing all your repositories on GitHub with pagination enabled. Implement Search and Filter.

2. Create another page showing data for a single repo when clicked from the page Show all repos using nested routes while using all the necessary tools in React. 

3. Implement an Error Boundary (show a page to test the error boundary)

4. a 404 page (show a page to test the 404 page) 

5. Good Layout, UI and Designs are essential. 


### Pages
There are 4 pages implemented on this task: Home Page, Repository Page, 404 Page, Error Page.

### Home Page: 
The home page has a navigation bar, hero section,  repositories list with pagination enabled with a previous and next button, search field and a footer section. The following are the functionalities you can carry out on the home page:

1. You can search for any repository of your choice
2. You can move between pages to see the list of the repositories
3. You can access each repository page by clicking the repository name
4. You can access the error page and 404 page under the hero section as instructed by the question to provide a test page for these functionalities
5. You can contact me with the contact button on the nav bar
6. You can navigate the home page from any page by clicking on the github icon or my username

### Repository Page: 
This page contains more detailed information about the repository which includes the Stars, Watch, Forks, Branches, Repository Link, Live url if any and the Language used in the Repository if any.

### 404 Page: 
This page contains an illustration and a return to home page link. This page is used when a user routes to a page that does not exist.

### Error Page: 
The page shows the error message that is displayed by the Error Boundary function that is implemented on the github api repository fetch. The page serves as a demo page to the error response that will be displayed if the api call catches an exception. 


## Process
### Technology Used
This includes React commponents, props, useState, useEffect, BrowserRouter, fetch API, react bootstrap.

### Lessons Learnt
How to fetch data from an external source using fetch()
Adding routes to react apps using React Router v6
Depolying React Routed sites to netlify
Implementing pagination using the GitHub API
Implementing Search functionality on the GitHub API
Creating error boundaries and implementing error pages

### Further Development
I learnt a lot during this project and I hope to learn more on fetching and consuming APIs, building APIs, learn more on Reactjs and Nodejs .

## How to run this on your Local PC:
To run this on your Local PC is pretty straightforward. Execute the following steps:
1. Clone this repo
2. Navigate to the path and run `npm install` on your terminal to install all dependencies
3. Run `npm start` and feel the magic.
