// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
//import { getAuth , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyAg_3ncEmrp0O29_3jM6LkzL1yOu5paIPI",
  authDomain: "cnfrmpage.firebaseapp.com",
  databaseURL: "https://cnfrmpage-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cnfrmpage",
  storageBucket: "cnfrmpage.appspot.com",
  messagingSenderId: "672008583246",
  appId: "1:672008583246:web:04e62617ab39a150632b1f",
  measurementId: "G-9BQZPWC9SG"
});
const analytics = getAnalytics(app);
const database = getDatabase(app);
/* 
//set 
let dataPro = [];
localStorage.setItem('product' , JSON.stringify(dataPro));

//get
if (localStorage.product != null) {
  dataPro = JSON.parse( localStorage.product)
}
*/



let gebi = p => document.getElementById(p)


export {app,database, getDatabase, ref, child, get, gebi}