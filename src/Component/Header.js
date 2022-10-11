import React from "react";
import NavBar from "./NavBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Header = () => {
  return (
    <div>
      <Grid2 container columnSpacing={1} rowSpacing={0} className="header">
        <Grid2 xs={9}>
          <NavBar />
        </Grid2>
        <Grid2 xs={1}>
          <FavoriteBorderOutlinedIcon />
        </Grid2>
        <Grid2 xs={1}>
          <PersonOutlineOutlinedIcon />
        </Grid2>
        <Grid2 xs={1}>
          <ShoppingBagOutlinedIcon />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Header;
