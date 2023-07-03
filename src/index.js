import React from "react";
import ReactDOM from "react-dom/client";
import { makeServer } from "./server";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./frontend/Context/authContext";
import { DataContext } from "./frontend/Context/dataContext";

makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
const loader = document.getElementById("loader");

const showLoader = () => {
  document.body.style.visibility = "hidden";
  loader.style.visibility = "visible";
};

const hideLoader = () => {
  document.body.style.visibility = "visible";
  loader.style.display = "none";
};

document.addEventListener("DOMContentLoaded", showLoader);

window.addEventListener("load", hideLoader);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <DataContext>
          <App />
        </DataContext>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
