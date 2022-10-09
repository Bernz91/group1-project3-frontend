import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import "./App.css";

const App = () => {
  console.log("test");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path=":index" element={<Child />} />
        <Route path="/new" element={<New />} /> */}
      </Routes>
    </div>
  );
};

export default App;
