import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import "../CSS/Header.css";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Grid2 container columnSpacing={0} rowSpacing={0} className="header">
        <Grid2 xs={3.5}>
          <NavBar />
        </Grid2>
        <Grid2 xs={5} className="headerLogo" onClick={() => navigate("/")}>
          Sew Sew Tailor
          {/* <div
            align="middle"
            className="headerLogo"
            onClick={() => navigate("/")}
          >
            Sew Sew Tailor
          </div> */}
        </Grid2>
        <Grid2 xs={1}>
          <FavoriteBorderOutlinedIcon />
        </Grid2>
        <Grid2 xs={1}>
          <PersonOutlineOutlinedIcon onClick={() => navigate("/userProfile")} />
        </Grid2>
        <Grid2 xs={1}>
          <Badge color="secondary" badgeContent={2}>
            <ShoppingBagOutlinedIcon
              onClick={() => navigate("/shoppingCart")}
            />
          </Badge>
        </Grid2>
        <Grid2 xs={0.5}></Grid2>
      </Grid2>
      <Outlet />
    </div>
  );
};

export default Header;
