import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBJYWqM33Ha_MlZuQXwVzROPcEUgwiTC00",  
    authDomain: "next-fb-clone-2f89c.firebaseapp.com",  
    projectId: "next-fb-clone-2f89c",  
    storageBucket: "next-fb-clone-2f89c.appspot.com",  
    messagingSenderId: "592730118651",  
    appId: "1:592730118651:web:61ec58e6585c627eae135e"  
  };

  // const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app()
  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)  
  const storage = getStorage(app);

  export {db, storage}