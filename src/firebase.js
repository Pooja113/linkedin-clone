import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCseWYx-uazRVAV0gVkxVg782gMgO3P7l4",
  authDomain: "linkedin-clone-4b142.firebaseapp.com",
  projectId: "linkedin-clone-4b142",
  storageBucket: "linkedin-clone-4b142.appspot.com",
  messagingSenderId: "896025040985",
  appId: "1:896025040985:web:3f76e91aa55776b45ef948",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
