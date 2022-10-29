import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../CSS/Header.css";
import Logout from "./Logout";

const Header = () => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <PersonOutlineOutlinedIcon
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
        </Grid2>
        <Grid2 xs={1}>
          <Badge color="secondary" badgeContent={2}>
            <ShoppingBagOutlinedIcon
              onClick={() => navigate("/shoppingCart")}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/userProfile");
                  handleClose();
                }}
              >
                My account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/sizeProfile");
                  handleClose();
                }}
              >
                Size Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/orderHistory");
                  handleClose();
                }}
              >
                Order History
              </MenuItem>
              <MenuItem>
                <Logout />
              </MenuItem>
            </Menu>
          </Badge>
        </Grid2>
        <Grid2 xs={0.5}></Grid2>
      </Grid2>
      <Outlet />
    </div>
  );
};

export default Header;
