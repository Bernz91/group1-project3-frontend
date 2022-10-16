import React, { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const NavBar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    state ? setState(false) : setState(true);
  };

  return (
    <div>
      <Fragment>
        <MenuIcon onClick={toggleDrawer}></MenuIcon>
        <Drawer anchor="left" open={state} onClose={toggleDrawer}>
          <Box
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {["Home", "How-it-works", "Shirts"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <Link to={`/${text}`}>
                      <ListItemText primary={text} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <Logout />
          </Box>
        </Drawer>
      </Fragment>
    </div>
  );
};

export default NavBar;
