import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
);
