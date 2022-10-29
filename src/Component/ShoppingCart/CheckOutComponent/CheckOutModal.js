import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import ReviewForm from "./ReviewForm";
import OrderSuccess from "./OrderSuccess";
import CircularIndeterminate from "./CircularProgress";
import { Card } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";
import { postOrderDetails } from "../../utils";

const CheckOutModal = (props) => {
  // console.log(props.orders);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  // const USERID = "3b898f23-1f1a-492f-8481-860c9982ef3b";
  const USERID = "3bab595a-78a4-48f6-b093-eea8726a796e"

  const orders = props.orders;
  console.log(orders);
  const totalCost = props.totalCost;
  const totalQuantity = props.totalQuantity;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const steps = [
    "Shipping address",
    "Payment details",
    "Review your order",
    "Order Success",
  ];
  const theme = createTheme();

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    saveCard: "",
  });
  const [shipmentDetails, setShipmentDetails] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    saveAddress: "",
  });
  const [orderId, setOrderId] = useState();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            shipmentDetails={shipmentDetails}
            handleShipmentChange={(e) => handleShipmentChange(e)}
            handleShipmentSubmit={(e) => handleShipmentSubmit(e)}
          />
        );
      // return "this is address form";
      case 1:
        return (
          <PaymentForm
            handleCardChange={(e) => handleCardChange(e)}
            handleCardSubmit={(e) => handleCardSubmit(e)}
            handleBack={() => handleBack()}
          />
        );
      // return "this is payment form";

      case 2:
        return (
          <ReviewForm
            shipmentDetails={shipmentDetails}
            orders={props.orders}
            totalCost={props.totalCost}
            card={card}
            handleSubmitOrder={() => handleSubmitOrder()}
            handleBack={() => handleBack()}
          />
        );

      case 3:
        return <OrderSuccess orderId={orderId} />;

      default:
        throw new Error("Unknown step");
    }
  };

  const handleNext = () => {
    // console.log(activeStep);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleShipmentChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setShipmentDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleShipmentSubmit = (e) => {
    // e.preventDefault();
    console.log("passed");
    setShipmentDetails(shipmentDetails);
    console.log(shipmentDetails);
    handleNext();
  };

  // console.log(shipmentDetails);

  const handleCardChange = (e) => {
    // e.preventDefault();
    let value = e.target.value;
    let id = e.target.id;
    setCard((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const handleCardSubmit = (e) => {
    // e.preventDefault();
    setCard(card);
    handleNext();
  };

  const handleSubmitOrder = () => {
    console.log("attempt submission");
    console.log(shipmentDetails);
    // const order = Object.assign(shipmentDetails, card);
    // console.log(order);
    // setFinalOrder(order);
    // submitting orders to db
    axios
      .post(`${BACKEND_URL}/orders/`, {
        paymentId: 1,
        userId: USERID,
        quantity: totalQuantity,
        subtotal: totalCost,
        shippingFee: 0,
        total: totalCost,
        status: "Preparing",
        shippingAddress: JSON.stringify(shipmentDetails),
      })
      .then((res) => res.data)
      .then((res) => {
        console.log(res.id);
        postOrderDetails(res.id, orders);
        setOrderId(res.id);
        console.log("passed");
      })
      .catch((error) => {
        console.log(error);
      });

    handleNext();
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="error"
        onClick={handleOpen}
        disableElevation
        size="large"
        startIcon={<AddShoppingCartIcon />}
        align="center"
        sx={{ align: "center" }}
        disabled={orders.length === 0}
      >
        Proceed to checkout
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {/* {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )} */}

                      {/* <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
                      </Button> */}
                    </Box>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </Container>
        </ThemeProvider>

        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
    </Box>
  );
};

export default CheckOutModal;
