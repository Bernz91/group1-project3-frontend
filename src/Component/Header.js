import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Grid2 container columnSpacing={2} rowSpacing={0.5} className="header">
        <Grid2 xs={3}>
          <NavBar />
        </Grid2>
        <Grid2 xs={6}>
          <div align="middle" onClick={() => navigate("/")}>
            Sew Sew Tailor
          </div>
        </Grid2>
        <Grid2 xs={1}>
          <FavoriteBorderOutlinedIcon />
        </Grid2>
        <Grid2 xs={1}>
          <PersonOutlineOutlinedIcon onClick={() => navigate("/userProfile")} />
        </Grid2>
        <Grid2 xs={1}>
          <ShoppingBagOutlinedIcon />
        </Grid2>
      </Grid2>
      <Outlet />
    </div>
  );
};

export default Header;
