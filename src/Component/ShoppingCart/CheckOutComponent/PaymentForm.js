import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Form } from "react-router-dom";
import Box from "@mui/material/Box";

const PaymentForm = (props) => {
  return (
    <Box
      component="form"
      onSubmit={() => {
        props.handleCardSubmit();
        // props.handleNext();
      }}
    >
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={props.handleCardChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            // inputProps={{ pattern="\d{3,4}" }}
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={props.handleCardChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            // inputProps={{ pattern: "dd/dd" }}
            onChange={props.handleCardChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            // inputProps={{ pattern: "d{3,4}" }}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={props.handleCardChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveCard"
                value="yes"
                onChange={props.handleCardChange}
              />
            }
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <Grid align="right">
        <Button onClick={props.handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button variant="contained" sx={{ mt: 3, ml: 1 }} type="submit">
          Next
        </Button>
      </Grid>
    </Box>
  );
};

export default PaymentForm;
