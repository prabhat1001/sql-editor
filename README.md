# sql-editor
It's a web-based application capable of running SQL queries and displaying the results of said query.

# SQL Editor

### [Live Version](https://prabhat1001.github.io/sql-editor)

A Web App For Basic SQL editor view to demonstrate where your users can query easily on a table using SQL and have ui components for the functionalities that can be added.

## Requirements

- npm

## Libraries Used

- [React](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [React-Ace](https://github.com/securingsincity/react-ace)

## How to run:

1. [Clone](https://github.com/prabhat1001/sql-editor.git) the Repository.
2. Run `npm install` to install the project dependencies.

3. Run `npm start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## Page Load Time

Page Load TIme has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![img](https://user-images.githubusercontent.com/16102594/121433865-29e5ba80-c99a-11eb-84de-9043ecffc072.png)

### Steps taken to Optimize

1. There was render blocking javascript for google font causing delay, used method mentioned [here](https://pagespeedchecklist.com/asynchronous-google-fonts) to overcome the problem.

2. Only importing used Module in a component from library rather than importing whole library.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).
