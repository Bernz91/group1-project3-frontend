import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "../CSS/homePage.css";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

const Home = () => {
  let navigate = useNavigate();

  return (
    <Grid2 container columnSpacing={2} rowSpacing={2} class="home">
      <Grid2 xs={12}>
        <div class="brand">Sew Sew Tailor</div>
      </Grid2>
      <br />
      <Grid2 xs={12}>
        <Button variant="contained">How it works</Button>
      </Grid2>
    </Grid2>
  );
};

export default Home;
