import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAK3KYlfKaNVa7SbZhtOxMPu8Vn47X0If0",
  authDomain: "instagram-reels-clone-ebd18.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-ebd18.firebaseio.com",
  projectId: "instagram-reels-clone-ebd18",
  storageBucket: "instagram-reels-clone-ebd18.appspot.com",
  messagingSenderId: "477040981134",
  appId: "1:477040981134:web:b14953428910d4482005df"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;