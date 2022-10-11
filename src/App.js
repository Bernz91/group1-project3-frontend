import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Fabrics from "./Component/Fabrics";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/Register";
import Header from "./Component/Header";

const App = () => {
  console.log("test");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path=":index" element={<Child />} /> */}
        <Route path="/fabrics" element={<Fabrics />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </div>
  );
};

export default App;
