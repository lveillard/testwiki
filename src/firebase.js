import firebase from 'firebase'
require('firebase/firestore')


var config = {
    apiKey: "AIzaSyCBLXlPQAOMb7Sbuly97NVDDJJ8qhY5Dj0",
    authDomain: "wiki-vers.firebaseapp.com",
    databaseURL: "https://wiki-vers.firebaseio.com",
    projectId: "wiki-vers",
    storageBucket: "wiki-vers.appspot.com",
    messagingSenderId: "618128492746"
  };

var fire = firebase.initializeApp(config);
export const db = firebase.firestore();

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
