import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBZGdQw1RmI5yQHlgMrw5zqreZn5RAcQyo",
    authDomain: "linkedin-clone-1e33b.firebaseapp.com",
    projectId: "linkedin-clone-1e33b",
    storageBucket: "linkedin-clone-1e33b.appspot.com",
    messagingSenderId: "475541226035",
    appId: "1:475541226035:web:d95ebf5085f4b268ba9946"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export  { db, auth };