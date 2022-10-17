import React from "react";
import { useUserContext } from "../Context/UserContext";
import LoginPage from "./LoginPage";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const ShoppingCartPage = () => {
  const { user, setUser } = useUserContext;

  return <>Hello shop shop shop!</>;
};

export default ShoppingCartPage;
