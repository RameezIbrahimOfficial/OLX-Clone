import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDGq1seEg6xJY2fHQ_k9Dk5Nwjh5b-Ug_I",
    authDomain: "olx-clone-85d8a.firebaseapp.com",
    projectId: "olx-clone-85d8a",
    storageBucket: "olx-clone-85d8a.appspot.com",
    messagingSenderId: "652677906637",
    appId: "1:652677906637:web:749067ea3cd7e0bef8a984"
  };
  
export default firebase.initializeApp(firebaseConfig);