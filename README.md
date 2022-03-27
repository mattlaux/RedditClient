# Mock Reddit Web Application

This project is an imitation of the Reddit web application. It was built with React, Redux-Toolkit, and Sass. Functional and integration testing was conducted with Jest and React Testing Library. End-to-end testing was conducted with Cypress. A live hosted version of the application can be seen [here](https://tangerine-dango-2a2c01.netlify.app).

**Disclaimer**: This web app pulls all information directly from Reddit. The posts that appear have not been chosen by me.

![Mock Reddit Homepage](./src//media/appScreenshot.png)
![Mock Post Comments](./src//media//commentScreenshot.png)

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Project Status](#project-status)
- [Inspiration](#inspiration)
- [Sources](#sources)

## Introduction

---

This project was created in order to demonstrate and improve upon my skills with React, Redux, Jest, React Testing Library, Sass, and Cypress. In addition, this project emphasized requesting data from the Reddit API and properly handling the returned data.

## Technologies

---

- React 17.0.2
- Redux-Toolkit 1.8.0
- Jest 27.5.1
- React Testing Library 12.1.4
- Sass 1.3.0
- Cypress 9.5.2

## Setup

---

**Note: A live hosted version of the application can be seen [here](https://tangerine-dango-2a2c01.netlify.app).**

Setup of this web application is straight forward:

- Download the repository Reddit Client linked [here](https://github.com/mattlaux/RedditClient).
- Navigate to project directory and enter `cd my-app`
- Run `npm install` and then `npm start`. The app will open in development mode at http://localhost:3000.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run cypress:open`

Opens the Cypress test runner for end-to-end testing.<br />
From here you will have the option to choose which browser to run the end-to-end test on.

See more information regarding [Cypress](https://www.cypress.io).

## Features

---

- Retrieve posts from hot, new, or top from Reddit homepage
- Click on post titles to see a detail view of the post with all comments
- Click on links to view outside articles included in posts
- Handles and renders a wide variety of media files returned from the Reddit API

## Project Status

---

This project has finished development for now. The primary goal was to deomnstrate my abilities with React, Redux, TDD, and Sass. I felt as though it was more productive to move onto other projects and skills rather than spend any additional time on this project. If I were to continue with this project the next steps are listed below.

Areas of Improvement:

- Video player (Right now video data used from Reddit API is poor)
- Implement login and authorization flow
- Increased interactivity (save posts, add comment, upvote functionality, etc.)

## Sources

---

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).
- To learn more on the API used, view the [Reddit JSON API Documentation](https://github.com/reddit-archive/reddit/wiki/JSON).
