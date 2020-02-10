import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import 'firebase/functions';

const initializeFirebase = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyATNK_TRJrcIYveWLjDdGgVeyWR2CBZlRE",
        authDomain: "future-tube-f4.firebaseapp.com",
        databaseURL: "https://future-tube-f4.firebaseio.com",
        projectId: "future-tube-f4",
        storageBucket: "future-tube-f4.appspot.com",
        messagingSenderId: "371811351420",
        appId: "1:371811351420:web:d80ae1c3afdead3d35c2f9",
        measurementId: "G-0LWDDFEHXG"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
};

export default initializeFirebase