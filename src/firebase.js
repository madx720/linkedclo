import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8bpsjG3IDUEY7M0tnpXPR6zzeFaHpLPM",
  authDomain: "linkedinclo-baa1a.firebaseapp.com",
  projectId: "linkedinclo-baa1a",
  storageBucket: "linkedinclo-baa1a.appspot.com",
  messagingSenderId: "448463608009",
  appId: "1:448463608009:web:e690406934b1d32beb9518",
  measurementId: "G-NEJ68EDDFZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
