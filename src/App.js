import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Fabrics from "./Component/Fabrics";

const App = () => {
  console.log("test");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path=":index" element={<Child />} /> */}
        <Route path="/fabrics" element={<Fabrics />} />
      </Routes>
    </div>
  );
};

export default App;
