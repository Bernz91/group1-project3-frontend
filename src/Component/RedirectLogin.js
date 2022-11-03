import React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useAuth0 } from "@auth0/auth0-react";

const RedirectLogin = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Container display="center" align="center" sx={{ m: 1 }}>
      <Typography variant="h5" sx={{ mt: 5 }}>
        Uh oh!
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        You need to login to proceed :){" "}
      </Typography>
      <Button
        variant="contained"
        onClick={() => loginWithRedirect()}
        sx={{ m: 2 }}
      >
        Click here to login
      </Button>
    </Container>
  );
};

export default RedirectLogin;
