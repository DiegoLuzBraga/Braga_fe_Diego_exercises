## Frontend Challange

## :arrow_forward: How to execute?

1. Make sure you have [installed npm on your machine](https://phoenixnap.com/kb/install-node-js-npm-on-windows).
2. After that, through the terminal, go to the directory where you downloaded the project;
3. Now, run the `npm i` command to download all project dependencies;
4. After installing the dependencies, execute the `npm start` command and a tab will open in your default browser with the address [http://localhost:3000/](http://localhost:3000/);
5. The application needs the internet to work;

## :computer: Technologies used

- React;
- Typescript;
- MVVM;
- Material UI;
- jest;
- react testing library;

**Language**: Javascript with Typescript

**Architecture:** MVVM

## :scroll: Features

- [x] Inclusion of the search bar on the team and team overview screens.
- [x] Basic style change.
- [x] Update and create new tests.

## :bar_chart: Justifying the changes
The changes I made were thinking about the scalability of the project, and how we could separate its layers, making them simpler and more testable. First, I chose to use MVVM. It is a simple architecture, easy to understand, and very simple to apply. Separating the modules into view and view model, it is easier to leave the view clean and the view model with the responsibility for changing states. But as for the model? The model is the interaction layer with what is external to the application and because it has an API file, I chose to leave it as it was, but it is the model of this application.

Second, I chose to use the UI material and its icons for the sake of ease. it is easier to use a ready-made component than to create one from scratch. In addition to more beautiful icons.

Last but not least, creating and updating the tests. some tests were working correctly and satisfactorily, so I didn't make any changes. There was a "to do" in the middle of some tests asking for an implementation and so it was done! I also created tests for the created components and functions.

I made some minor changes to the names of some variables and the names of some types and the fields of those types.

## :thought_balloon: Did I forget something? Something could be better?
Leave a comment! Let's compare our points of view and discuss what's best for the project!