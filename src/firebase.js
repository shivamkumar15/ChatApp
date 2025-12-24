import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';

export const auth =firebase.initializeApp({
    apiKey: "AIzaSyC3zDvU1GRoUIA2qabWLztFYC7ugtjgmBY",
    authDomain: "dranzer-dc5a3.firebaseapp.com",
    projectId: "dranzer-dc5a3",
    storageBucket: "dranzer-dc5a3.appspot.com",
    messagingSenderId: "240204793777",
    appId: "1:240204793777:web:3d95154c42f571abb15f90"
}).auth();