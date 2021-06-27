import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBusksrz7jLVTpV7UjpG0uKp_FDeE1JEG8",
  authDomain: "animal-rescue-app-af2d8.firebaseapp.com",
  projectId: "animal-rescue-app-af2d8",
  storageBucket: "animal-rescue-app-af2d8.appspot.com",
  messagingSenderId: "783470520727",
  appId: "1:783470520727:web:6b53e2a00e4f5c39ccfcd2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();