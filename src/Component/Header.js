import { React, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import axios from "axios";
import { updateCartlength } from "./utils";
import { useAuth0 } from "@auth0/auth0-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const USERID = "834fc3ef-6ccc-4ba4-a54e-1a75387da94f";

const Header = () => {
  let navigate = useNavigate();
  const [cartlength, setCartLength] = useState();
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getCartLength = async () => {
      // to be activated once the userAutho is ready (Zi Hao side)
      if (user) {
        try {
          const accessToken = await getAccessTokenSilently({
            audience: "https://group1-project3/api",
            scope: "read:current_user",
          });
          await axios
            .get(`${BACKEND_URL}/users/${user.sub}/wishlists/`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((res) => res.data)
            .then((res) => {
              setCartLength(res.length);
            });
        } catch (e) {
          console.log(e);
        }
      }
    };
    getCartLength();
  }, [user]);

  return (
    <div>
      <Grid2 container columnSpacing={2} rowSpacing={0.5} className="header">
        <Grid2 xs={3.2}>
          <NavBar />
        </Grid2>
        <Grid2 xs={5.6}>
          <div align="middle" onClick={() => navigate("/")}>
            Sew Sew Tailor
          </div>
        </Grid2>
        <Grid2 xs={1}>
          {/* <FavoriteBorderOutlinedIcon
          
          /> */}
        </Grid2>
        <Grid2 xs={1}>
          <PersonOutlineOutlinedIcon onClick={() => navigate("/userProfile")} />
        </Grid2>
        <Grid2 xs={1}>
          <Badge
            color="secondary"
            badgeContent={cartlength}
            onClick={() => navigate("/ShoppingCart")}
          >
            <ShoppingBagOutlinedIcon />
          </Badge>
        </Grid2>
        <Grid2 xs={0.2}></Grid2>
      </Grid2>
      <Outlet />
    </div>
  );
};

export default Header;
