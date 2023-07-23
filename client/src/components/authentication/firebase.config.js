// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBNU-ppCxFXUdUa3pUE7OlLBVTguFzwPO4",
//   authDomain: "avadhutha-tracker.firebaseapp.com",
//   projectId: "avadhutha-tracker",
//   storageBucket: "avadhutha-tracker.appspot.com",
//   messagingSenderId: "87712398613",
//   appId: "1:87712398613:web:a91eb9d14b55c80f12bd1c",
//   measurementId: "G-N3H6HC417D"
// };

/**sachinvanja793@gmail.com */
const firebaseConfig = {
  apiKey: "AIzaSyAZ9FupUW22C_1AM4RuYEsoHP20OurZNfY",
  authDomain: "tracker-3f3dc.firebaseapp.com",
  projectId: "tracker-3f3dc",
  storageBucket: "tracker-3f3dc.appspot.com",
  messagingSenderId: "640381289111",
  appId: "1:640381289111:web:521bdd3669ee4b3ef91fd2",
  measurementId: "G-L9G0BQG27Q",
  recaptcha_site_key: "YOUR_RECAPTCHA_SITE_KEY_HERE"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBNU-ppCxFXUdUa3pUE7OlLBVTguFzwPO4",
//   authDomain: "avadhutha-tracker.firebaseapp.com",
//   projectId: "avadhutha-tracker",
//   storageBucket: "avadhutha-tracker.appspot.com",
//   messagingSenderId: "87712398613",
//   appId: "1:87712398613:web:a91eb9d14b55c80f12bd1c",
//   measurementId: "G-N3H6HC417D",
//   recaptcha_site_key: "YOUR_RECAPTCHA_SITE_KEY_HERE" // Add your Recaptcha API key here
// };

/**Sandeepls6361@gmail.com */
// const firebaseConfig = {
//   apiKey: "AIzaSyBAf8AJgkTeuzac8UL9VcenY9CfzqM3nHw",
//   authDomain: "tracker-542da.firebaseapp.com",
//   projectId: "tracker-542da",
//   storageBucket: "tracker-542da.appspot.com",
//   messagingSenderId: "306305448078",
//   appId: "1:306305448078:web:e900fd168f39237ab3f1df",
//   measurementId: "G-CZDZTD343T",
//   // recaptcha_site_key: "YOUR_RECAPTCHA_SITE_KEY_HERE"
// };

/**sandeepls3025 */
// const firebaseConfig = {
//   apiKey: "AIzaSyDcWakLI-ngelEzwQUxSRykDB1UOBmvnzg",
//   authDomain: "avdhutha-940ea.firebaseapp.com",
//   projectId: "avdhutha-940ea",
//   storageBucket: "avdhutha-940ea.appspot.com",
//   messagingSenderId: "949410672772",
//   appId: "1:949410672772:web:4bc69fccf9e321be7192d1",
//   measurementId: "G-LP90SP4DZQ"
// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
