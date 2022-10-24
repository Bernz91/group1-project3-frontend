import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import UserProfileForm from "../Component/UserProfileForm";
import Login from "../Component/Login";
import { useNavigate } from "react-router";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UserAccountPage = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  let navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    if (user) {
      try {
        axios
          .get(`${BACKEND_URL}/users/${user.sub}`)
          .then((res) => res.data)
          .then((res) => {
            if (!res) {
              axios
                .post(`${BACKEND_URL}/users`, {
                  id: user.sub,
                  email: user.email,
                })
                .then((response) => {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
            setUserDetails(res);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user, userDetails]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          Please login to continue.
          <button>
            <Login />
          </button>
        </div>
      ) : (
        <Grid2 container columnSpacing={2} rowSpacing={2}>
          <Grid2 xs={6}>
            <Button
              variant="contained"
              onClick={() => navigate("/SizeProfile")}
            >
              Size Profiles
            </Button>
          </Grid2>
          <Grid2 xs={6}>
            <Button variant="contained">Order Details</Button>
          </Grid2>
          <UserProfileForm userDetails={userDetails} />
        </Grid2>
      )}
    </div>
  );
};
export default UserAccountPage;
