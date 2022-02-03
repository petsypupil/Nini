
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB0L-TnYn2ZgLwJdXH5y4QBLuvOYVyssEY",
  authDomain: "ninishop-26be8.firebaseapp.com",
  projectId: "ninishop-26be8",
  storageBucket: "ninishop-26be8.appspot.com",
  messagingSenderId: "930189330334",
  appId: "1:930189330334:web:7990172bf0bbc73876788f"
};


const app = initializeApp(firebaseConfig);

export const llamadoFirestoreApp = () => {
  return app
}