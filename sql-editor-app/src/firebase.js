import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcTpTuBn_D6xpVIdvxPL4OkKYibOz65Qc",
  authDomain: "sql-editor-866cf.firebaseapp.com",
  projectId: "sql-editor-866cf",
  storageBucket: "sql-editor-866cf.appspot.com",
  messagingSenderId: "223618214582",
  appId: "1:223618214582:web:ed401973318ebecee19417",
  measurementId: "G-H37E8R14XX"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

const handleAuth = ()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        alert(error.message);
    })
}


export {auth, provider, storage,handleAuth};
export default db;