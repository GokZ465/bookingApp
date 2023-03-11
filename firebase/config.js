import firebase from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2vMSeTZxGLjzwVxT8jCmZPNLnYQA2y2c",
  authDomain: "bookingapp-1c858.firebaseapp.com",
  projectId: "bookingapp-1c858",
  storageBucket: "bookingapp-1c858.appspot.com",
  messagingSenderId: "446226419232",
  appId: "1:446226419232:web:0c56bea8a4e200821df645",
};
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// Initialize Firebase

console.log(firebase.name);
