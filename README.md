# Cat Tinder Clone React App - [live demo](https://cat-tinder-ashen.vercel.app/)

Responsive web app for a Tinder Clone. This project was built with React.js, Create React App & Craco, Typescript, Emotion, and Zustand. Deployed with Vercel.

## How to run the app
Install the dependencies with `npm run start`.
Then, run the following command `npm run start`. It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to run tests

- Run the following command `npm run test` to launch the test runner in the interactive watch mode.

## How to build

Run the following command `npm run build`. It builds the app for production to the `build` folder.

## Project structure

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the features folder, which should contain different feature-based things. Every feature folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

### `Assets`

Assets folder can contain all the static files such as images, fonts, etc.

### `Components`

Contains UI sharable components. These components can be used in any part of the app as their logic is not linked to a particular process.

### `Config`

All the global configuration, env variables etc. get exported from here and used in the app

### `Features`

Modules containing the main business logic of the application

### `Hooks`

Shared hooks used across the entire application

### `Stores`

Global state stores in this case zustand

### `Test`

Test utilities

### `Styles`

Contains the style settings for the app. This provides some global styles through Emotion and constants related to the look and feel of the app.

### `*.test.tsx`

Contains the test cases and the fixtures needed for testing. There are tests for components flow