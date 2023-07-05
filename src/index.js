import React from "react";
import ReactDOM from "react-dom/client";
import { makeServer } from "./server";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./frontend/Context/authContext";
import { DataContext } from "./frontend/Context/dataContext";
import ScrollToTop from "./frontend/Components/ScrollToTop";

makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
const loader = document.getElementById("loader");

const showLoader = () => {
  document.body.style.overflow = "hidden";
  document.body.style.visibility = "hidden";
  loader.style.visibility = "visible";
};

const hideLoader = () => {
  document.body.style.visibility = "visible";
  document.body.style.overflowY = "auto";
  loader.style.display = "none";
};

document.addEventListener("DOMContentLoaded", showLoader);

window.addEventListener("load", hideLoader);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AuthContextProvider>
        <DataContext>
          <App />
        </DataContext>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
