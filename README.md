# React/Firebase/ReactStrap/Sass

Look for multiple steps in different branches.

1. Firebase: setup
2. Postman: add sample data
3. App: add login/logout (modify sample data to match uid)
4. App: get data
5. App: post data
6. App: delete data
7. App: update data

## Project Setup

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Once you download the project, run `npm` install in the project directory.

## Firebase Setup
1. Create a Firebase Realtime Database.
2. Setup Database Rules
  ```json
  {
  "rules": {
    ".read": true,
    ".write": true,
      "boards": {
        ".indexOn": ["uid"]
      },
      "pins": {
        ".indexOn": ["boardId", "uid"]
      }
    }
  }
  ```
3. Setup Authentication/ Sign-in Method - start with Google.
4. Use Postman to add sample data.
5. Create `config.js` with your projects credentials. (helpers/data/config.js)

## Firebase Flow
* When the App loads up, it should check for `firebase` and if not found initialize the app with `firebase`. (helpers/data/connection). This happens before anything else.
   ```js
   fbConnection();
   ```
* Within `App.js` setup a function to listen for when a user logs in or out.
  ```js
   authListener = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ authed: true });
    } else {
      this.setState({ authed: false });
    }
  });
  ```

* `componentDidMount()` should invoke `authListener()`
* Create a function `loadComponent` to determine what to show (full app or login)
* `render()` invokes `loadComponent` and pass the state of `authed` to the **`<MyNavbar authed={authed} />`** . This gives ability to show `login` or `logout` in the navbar.

##

### NPM Available Scripts
In the project directory, you can run:
#### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`
#### `npm run build`
#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
