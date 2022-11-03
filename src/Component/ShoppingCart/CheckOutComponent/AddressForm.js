import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const AddressForm = (props) => {
  const details = props.shipmentDetails;

  return (
    <Box
      component="form"
      onSubmit={() => {
        props.handleShipmentSubmit();
        // props.handleNext();
      }}
    >
      <Container component="main" maxWidth="sm" maxHeight="sm">
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              defaultValue={details.firstName}
              onChange={props.handleShipmentChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              defaultValue={details.lastName}
              onChange={props.handleShipmentChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              defaultValue={details.address1}
              onChange={props.handleShipmentChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              defaultValue={details.city}
              onChange={props.handleShipmentChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              defaultValue={details.state}
              onChange={props.handleShipmentChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              defaultValue={details.zip}
              onChange={props.handleShipmentChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              defaultValue={details.country}
              onChange={props.handleShipmentChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="saveAddress"
                  value="yes"
                  defaultValue={details.saveAddress}
                />
              }
              label="Use this address for payment details"
            />
          </Grid> */}
        </Grid>
        <Grid align="right">
          <Button variant="contained" sx={{ mt: 3, ml: 1 }} type="submit">
            Next
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddressForm;
