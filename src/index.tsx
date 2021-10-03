import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextApiProvider } from "./store/store-context";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnCKNa15Acu62u4j6HUmVpErItiZMrLKE",
  authDomain: "new-react-b0551.firebaseapp.com",
  projectId: "new-react-b0551",
  storageBucket: "new-react-b0551.appspot.com",
  messagingSenderId: "201268375109",
  appId: "1:201268375109:web:e57b1389e7866455edbd2c",
  measurementId: "G-FKFBPPEZM5",
};
const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <ContextApiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
