import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-asswfkic.us.auth0.com"
    clientId="rk5yAjthXiWtp1L147pNvMZgy06UVRQY"
    redirectUri={window.location.origin}
    audience="https://group1-project3/api"
    scope="read:current_user update:current_user_metadata"
  >
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </Auth0Provider>
);
