# SQL Editor

### [Live Version](https://sql-editor-six.vercel.app)

It's a web-based application capable of running SQL queries and displaying the results of said query.

## Requirements

- npm

## Libraries and Dependencies Used

- [React](https://reactjs.org/)

- [Styled-Components](https://styled-components.com/)
    ```
    npm install --save styled components
    ```
- [React-Ace](https://github.com/securingsincity/react-ace)
    ```
    npm install react-ace ace-builds
    ```
- [React-Icons](https://react-icons.github.io/react-icons/)
    ```
    npm install react-icons
    ```
- [Redux](https://redux.js.org/)
    ```
    npm install react-redux
    npm install @reduxjs/toolkit
    ```
- [Firebase](rebase.google.com)
    ```
    npm install firebase
    npm install -g firebase-tools   
    ```


## How to run:

1. [Clone](https://github.com/prabhat1001/sql-editor.git) the Repository.
2. Run `npm install` to install the project dependencies.

3. Run `npm start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## Page Load Time

Page Load TIme has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![performance-deployed](https://user-images.githubusercontent.com/71027441/177047413-a77d3de4-940f-4f25-8198-a3e902b5cf4c.png)
![metrics](https://user-images.githubusercontent.com/71027441/177047421-0da3075e-effd-4f55-8ade-4f37c3d7872a.png)


### Steps taken to Optimize

1. There was render blocking javascript for google font causing delay, used method mentioned [here](https://pagespeedchecklist.com/asynchronous-google-fonts) to overcome the problem.

2. Only importing used Module in a component from library rather than importing whole library.

3. Prevent browser from recording the cache memory using
    ```
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    ```

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).
