
import firebase from 'firebase';



const firebaseAConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAQvhyZnRUG94COToInD7E-BtxipTI3TYw",
  authDomain: "music-store-react.firebaseapp.com",
  databaseURL: "https://music-store-react.firebaseio.com",
  projectId: "music-store-react",
  storageBucket: "music-store-react.appspot.com",
  messagingSenderId: "966889187754",
  appId: "1:966889187754:web:9f6f0c5fd6cb30793fa3d3",
  measurementId: "G-T957JLBL6X"


};

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage=firebase.storage();

export {db,auth};