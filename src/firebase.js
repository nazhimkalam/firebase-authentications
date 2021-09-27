import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsESX9Pou1ENNeZN84wQcgm_npShHDgRo",
  authDomain: "fir-authentications-4ceb2.firebaseapp.com",
  projectId: "fir-authentications-4ceb2",
  storageBucket: "fir-authentications-4ceb2.appspot.com",
  messagingSenderId: "254007795834",
  appId: "1:254007795834:web:3424fd3e382aeed89e1bc3",
  measurementId: "G-NZM83Y9PB8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const microsoftProvider = new firebase.auth.OAuthProvider("microsoft.com");
const appleProvider = new firebase.auth.OAuthProvider("apple.com");
const yahooProvider = new firebase.auth.OAuthProvider("yahoo.com");

export {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
  twitterProvider,
  yahooProvider,
  microsoftProvider,
  appleProvider,
  firebaseApp,
};

export default db;
