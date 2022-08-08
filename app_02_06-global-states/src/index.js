import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./stores/FavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);

// https://stackoverflow.com/questions/70090237/error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element-never
// https://stackoverflow.com/questions/70090237/error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element-never
