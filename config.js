import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyD40ULXP9eIn1B0X3roDdVnnF5pzkDr7CE",
 authDomain: "project-71-1e75d.firebaseapp.com",
 projectId: "project-71-1e75d",
 storageBucket: "project-71-1e75d.appspot.com",
 messagingSenderId: "1021429092303",
 appId: "1:1021429092303:web:c414bfa6cf3e7a59a20cba"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

