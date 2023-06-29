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
