import React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const EmptyOrder = () => {
  let navigate = useNavigate();
  return (
    <Container display="center" align="center" sx={{ m: 1 }}>
      <Typography variant="h5" sx={{ mt: 5 }}>
        You have no orders yet :(
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Add some orders to make it happy :){" "}
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("../Customisation")}
        sx={{ m: 2 }}
      >
        Start your customzation here
      </Button>
    </Container>
  );
};

export default EmptyOrder;
