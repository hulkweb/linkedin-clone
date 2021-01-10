
import firebase from'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDTqxvhksaylyK1MIUJ_jcmEKkkjVt0VJE",
    authDomain: "hulkweb--clone.firebaseapp.com",
    projectId: "hulkweb--clone",
    storageBucket: "hulkweb--clone.appspot.com",
    messagingSenderId: "106884248328",
    appId: "1:106884248328:web:4f5002d48a60ff88d6f2bd",
    measurementId: "G-X420E9B6Q3"
  };
  // Initialize Firebase
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const db=firebaseapp.firestore();
  export {auth,provider};
  export default db;
