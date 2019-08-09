import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const firebase = require("firebase");
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpsa_rXgjn_AMA-rEKAKxJUKyRuOmqKtY",
  authDomain: "evernote-clone-9989f.firebaseapp.com",
  databaseURL: "https://evernote-clone-9989f.firebaseio.com",
  projectId: "evernote-clone-9989f",
  storageBucket: "evernote-clone-9989f.appspot.com",
  messagingSenderId: "699726528193",
  appId: "1:699726528193:web:4c350550c174c116"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
