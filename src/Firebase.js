import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC6_zghYFGM2RokbidK0v5lGQN0XTlIsWU",
  authDomain: "discord-1cc76.firebaseapp.com",
  databaseURL: "https://discord-1cc76.firebaseio.com",
  projectId: "discord-1cc76",
  storageBucket: "discord-1cc76.appspot.com",
  messagingSenderId: "109548504099",
  appId: "1:109548504099:web:fec18781e1b1e6ee1b1d96"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;