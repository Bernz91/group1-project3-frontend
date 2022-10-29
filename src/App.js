import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/HomePage";
import Fabrics from "./Component/Fabrics";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/Register";
import ShoppingCartPage from "./Page/ShoppingCartPage";
import Header from "./Component/Header";
import UserAccountPage from "./Page/UserAccountPage";
import SizeProfilePage from "./Page/SizeProfilePage";
import Customisation from "./Component/Customisation";
import HowItWorksPage from "./Page/HowItWorksPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="HowItWorks" element={<HowItWorksPage />} />
          <Route path="UserProfile" element={<UserAccountPage />} />
          <Route path="SizeProfile" element={<SizeProfilePage />} />
          <Route path="Customisation" element={<Customisation />} />
          <Route path="Fabrics" element={<Fabrics />} />
          <Route
            path="Fabrics/:index"
            element={"to add page for individual fabric"}
          />
          <Route path="shoppingcart" element={<ShoppingCartPage />} />
          <Route path="*" element={"Nothing here!"} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
