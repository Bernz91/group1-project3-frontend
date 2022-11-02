import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const OrderSuccess = (props) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1" sx={{ lineHeight: "1.4" }}>
        Your order number is {props.orderId}. We have emailed your order
        confirmation, and will send you an update when your order has shipped.
      </Typography>
      <Grid align="right">
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          onClick={() => navigate("/OrderSummary")}
        >
          Ok
        </Button>
      </Grid>
    </Box>
  );
};

export default OrderSuccess;
