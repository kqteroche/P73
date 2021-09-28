import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyA1Oox1WA7KQLe_UnFB0HBbNpCuGHEzNLs",
  authDomain: "newsletter-f2a73.firebaseapp.com",
  databaseURL: "https://newsletter-f2a73-default-rtdb.firebaseio.com",
  projectId: "newsletter-f2a73",
  storageBucket: "newsletter-f2a73.appspot.com",
  messagingSenderId: "1019379721274",
  appId: "1:1019379721274:web:816795f8311a5a8f4d0103"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

