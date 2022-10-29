import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import "../CSS/HowItWorkPage.css";

const HowItWorksPage = () => {
  let navigate = useNavigate();
  const labels = [
    "Worldwide Deliver",
    "Customise",
    "Get Measured",
    "Crafted for You",
  ];
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in augue arcu.";

  const images = [
    "https://images.unsplash.com/photo-1584799580661-53b7c6b99430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    "https://images.unsplash.com/photo-1633655442356-ab2dbc69c772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    "https://images.unsplash.com/photo-1591944489410-16ec1074a18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=629&q=80",
    "https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  return (
    <div className="howItWorksMainDiv">
      <div className="howItWorksTitle" align="middle">
        <br />
        How it works
      </div>
      <br />
      {labels.map((label, index) => {
        return (
          <div key={label} align="middle" className="adjustVerticalPosition">
            <Grid2 container columnSpacing={2} rowSpacing={0} className="card">
              <Grid2 xs={10}>
                <label className="howItWorksLabel">{label}</label>
              </Grid2>
              <Grid2 xs={8}>
                <div className="howItWorksDescription">{description}</div>
              </Grid2>
              <Grid2 xs={2}>
                <div className="images">
                  <img src={images[index]} alt="error" />
                </div>
              </Grid2>
            </Grid2>
            <br />
          </div>
        );
      })}
      <div align="middle" className="mainPageButton">
        <Button variant="contained" onClick={() => navigate("/howItWorks")}>
          Begin
        </Button>
      </div>
    </div>
  );
};

export default HowItWorksPage;
