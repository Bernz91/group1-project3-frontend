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
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  let navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [isRegisteringUserDetail, setRegistering] = useState(false);

  useEffect(() => {
    console.log(userDetails);
    const getUser = async () => {
      if (user) {
        try {
          // Retrieve access token
          const accessToken = await getAccessTokenSilently({
            audience: "https://group1-project3/api",
            scope: "read:current_user",
          });

          await axios
            .get(`${BACKEND_URL}/users/${user.sub}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((res) => res.data)
            .then((res) => {
              if (!res) {
                try {
                  axios
                    .post(
                      `${BACKEND_URL}/users`,
                      {
                        id: user.sub,
                        email: user.email,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${accessToken}`,
                        },
                      }
                    )
                    .then((response) => {
                      console.log(response);
                      setRegistering(true);
                    });
                } catch (e) {
                  console.log(e);
                }
              } else {
                setUserDetails(res);
                setRegistering(false);
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUser();
  }, [user, isRegisteringUserDetail]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          You need to login to to proceed. Click here to <Login />.
        </div>
      ) : (
        <div className="userPageDiv">
          <Grid2 container columnSpacing={2} rowSpacing={2}>
            <Grid2 xs={6} className="sizeProfileButtonGrid">
              <Button
                variant="contained"
                onClick={() => navigate("/SizeProfile")}
              >
                Size Profiles
              </Button>
            </Grid2>
            <Grid2 xs={6} className="orderHistoryButtonGrid">
              <Button
                variant="contained"
                onClick={() => navigate("/OrderSummary")}
              >
                Order History{" "}
              </Button>
            </Grid2>
          </Grid2>
          <br />
          <UserProfileForm userDetails={userDetails} />
        </div>
      )}
    </div>
  );
};
export default UserAccountPage;
