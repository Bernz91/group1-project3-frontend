import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const OrderSuccess = (props) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1" sx = {{lineHeight: "1.4"}}>
        Your order number is {props.orderId}. We have emailed your order
        confirmation, and will send you an update when your order has shipped.
      </Typography>
    </Box>
  );
};

export default OrderSuccess;
