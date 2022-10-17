import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import LoginPage from "./LoginPage";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import UserProfileForm from "../Component/UserProfileForm";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UserAccountPage = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    if (user) {
      const [connection, userId] = user.sub.split("|");

      try {
        axios
          .get(`${BACKEND_URL}/users/${userId}`)
          .then((res) => res.data)
          .then((res) => {
            if (!res) {
              axios
                .post(`${BACKEND_URL}/users`, {
                  id: userId,
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
      {/* !!! to be changed to when there's no user then go to login page !!!!!*/}
      {!isAuthenticated ? (
        loginWithRedirect()
      ) : (
        <Grid2 container columnSpacing={2} rowSpacing={2}>
          <Grid2 xs={6}>
            <Button variant="contained">Size Profiles</Button>
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
