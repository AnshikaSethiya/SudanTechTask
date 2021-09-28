import firebase from 'firebase/compat/app';

const config = {
  apiKey: "AIzaSyCxUZDtmy8xFMMlk43eXqDyB8eWeKDg-9M",
  authDomain: "sudantechtask.firebaseapp.com",
  projectId: "sudantechtask",
  storageBucket: "sudantechtask.appspot.com",
  messagingSenderId: "259597018893",
  appId: "1:259597018893:web:4bfd75572b8e8bfddcf244"
};

firebase.initializeApp(config);

export {firebase}