import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/HomePage";
import Fabrics from "./Component/Fabrics";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/Register";
import Header from "./Component/Header";

const App = () => {
  console.log("test");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route path=":index" element={<Child />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/fabrics" element={<Fabrics />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
