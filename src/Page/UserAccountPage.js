import React from "react";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useAuth0 } from "@auth0/auth0-react";

import UserProfileForm from "../Component/UserProfileForm";
import Login from "../Component/Login";
import { useNavigate } from "react-router";

const UserAccountPage = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  let navigate = useNavigate();

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
                Order History
              </Button>
            </Grid2>
          </Grid2>
          <br />
          <UserProfileForm />
        </div>
      )}
    </div>
  );
};
export default UserAccountPage;
