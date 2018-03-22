import * as firebase from 'firebase';


export default function initFirebase() {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      user.getIdToken().then(token => localStorage.setItem('token', token));
    }
  });
}
