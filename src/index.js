import React from "react";
import ReactDOM from "react-dom/client";
import { makeServer } from "./server";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
