# Assignment 5 Trivia Game 📚

An online trivia game as a Single Page Application using the Vue.js framework (version 2.x).

Link to Figma sketches: https://github.com/nielsenchristoffer93/assignment-5-trivia-game/blob/main/Assignment5%20Figma%20sketches.pdf

Link to application: https://assigmnent5-trivia.herokuapp.com/

## Start Screen 👍

The first view is a start screen. Where you can select **how many questions** you want, which **difficulty** you want to play at and what **category**.


## Question Screen ❓

The application will then fetch questions from the Trivia-API (https://opentdb.com/api_config.php) based on your previous choices.
Once the game starts the app will display 1 question at a time untill every question has been answered.

## Result Screen 📊

This view will be displayed after every question has been answered. The results will be displayed (total score and showing what questions you answered wrong).
You can also choose to return to the start screen or replay the game with the same category and difficulty.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
