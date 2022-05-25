import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBJYWqM33Ha_MlZuQXwVzROPcEUgwiTC00",  
    authDomain: "next-fb-clone-2f89c.firebaseapp.com",  
    projectId: "next-fb-clone-2f89c",  
    storageBucket: "next-fb-clone-2f89c.appspot.com",  
    messagingSenderId: "592730118651",  
    appId: "1:592730118651:web:61ec58e6585c627eae135e"  
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()  

  const db = app.firestore() 
  const storage = firebase.storage()

  export {db, storage}