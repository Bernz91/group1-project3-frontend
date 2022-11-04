import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "../CSS/homePage.css";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { useAdminContext } from "../Context/AdminContex";

const Home = () => {
  let navigate = useNavigate();
  const { admin } = useAdminContext();

  return (
    <div className="howItWorksMainDiv">
      <Grid2 container columnSpacing={0} rowSpacing={0}>
        <Grid2 xs={12}>
          <div className="brand" align="middle">
            Sew Sew Tailor
          </div>
          <br />
          <div className="mainPageButton" align="middle">
            {admin ? (
              <div>Admin Page</div>
            ) : (
              <Button
                variant="contained"
                onClick={() => navigate("/howItWorks")}
              >
                How it works
              </Button>
            )}
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Home;
