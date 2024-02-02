import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDRdtZl3EBgNUrkEDr6jHVyNUUp9vF3WwM",
  authDomain: "instragram-clone-e63b9.firebaseapp.com",
  projectId: "instragram-clone-e63b9",
  storageBucket: "instragram-clone-e63b9.appspot.com",
  messagingSenderId: "154646532686",
  appId: "1:154646532686:web:005ba348ac5ead01f4691f",
  measurementId: "G-MYLLPQZMZZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }
