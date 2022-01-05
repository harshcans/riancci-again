import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMOaboFK_otxtY9mne6ab8XsNVA02Dc3w",
  authDomain: "client-187b6.firebaseapp.com",
  databaseURL: "https://client-187b6-default-rtdb.firebaseio.com",
  projectId: "client-187b6",
  storageBucket: "client-187b6.appspot.com",
  messagingSenderId: "386851101296",
  appId: "1:386851101296:web:26085366a6dda27030f2b5",
  measurementId: "G-VQB05NX51X"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
