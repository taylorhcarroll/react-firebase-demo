import firebase from 'firebase/app';
import firebaseConfig from './config';


const firebaseApp = () => {
  // check if firebase app exists.  If not initialize.
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export default firebaseApp;
