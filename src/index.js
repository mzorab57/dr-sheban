import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "./sass/style.scss";
import App from "./App";
import { HashRouter  } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nextProvider>
  </React.StrictMode>
);
