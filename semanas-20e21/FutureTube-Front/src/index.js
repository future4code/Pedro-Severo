import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import initializeFirebase from "./firebase";

initializeFirebase();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
