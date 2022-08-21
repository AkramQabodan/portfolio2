import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextCollector from "./context/ContextCollector";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextCollector>
        <App />
      </ContextCollector>
    </BrowserRouter>
  </React.StrictMode>
);
