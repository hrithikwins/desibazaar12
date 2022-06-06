// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHlAQMNYeriq8ge0lyy0wRsoJD5DFuqks",
    authDomain: "desicovers-next.firebaseapp.com",
    projectId: "desicovers-next",
    storageBucket: "desicovers-next.appspot.com",
    messagingSenderId: "1084582286194",
    appId: "1:1084582286194:web:54bf7c3518282cacdf83eb",
    measurementId: "G-Y8QJD4EE9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth , provider};
