import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/HomePage";
import Fabrics from "./Component/Fabrics";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/Register";
import Header from "./Component/Header";
import UserAccountPage from "./Page/UserAccountPage";

const App = () => {
  console.log("test");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="Home" element={<Home />} />
          <Route path="UserProfile" element={<UserAccountPage />} />
          <Route path="Fabrics" element={<Fabrics />} />
          <Route
            path="Fabrics/:index"
            element={"to add page for individual fabric"}
          />
        </Route>
        <Route path="Login" element={<LoginPage />} />
        <Route path="Register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
