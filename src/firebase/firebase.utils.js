import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAmuYb7Gpp7yBDUxWUbxs8WZf9iEUjrCU0",
  authDomain: "crowndb-1b493.firebaseapp.com",
  projectId: "crowndb-1b493",
  storageBucket: "crowndb-1b493.appspot.com",
  messagingSenderId: "1061722725010",
  appId: "1:1061722725010:web:db928fe8c11454324c644b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
