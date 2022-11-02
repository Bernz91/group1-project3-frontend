import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import OrderDetail from "./OrderDetail";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  extractArr,
  calcTotalCost,
  calcQuantity,
  deleteWishlist,
} from "../utils";
import { LegendToggle } from "@mui/icons-material";

const AccordionDisplay = (props) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const order = props.order;
  const orderDetails = order.order_details;

  //setting date for easier viewing
  let date = new Date(order.createdAt);
  let orderDate = date.toLocaleDateString();

  //   let details = extractArr(order.order_details, [
  //     "fabric",
  //     "cuff",
  //     "back",
  //     "pocket",
  //     "front",
  //     "collar",
  //     "quantity",
  //     "singleprice",
  //     "totalprice",
  //   ]);

  //   console.log(details);

  // useEffect(() => {
  //   const getAllOrderDetails = () => {
  //     const details = extractArr(order.order_details, [
  //       "fabric",
  //       "cuff",
  //       "back",
  //       "pocket",
  //       "front",
  //       "collar",
  //       "quantity",
  //       "singleprice",
  //       "totalprice",
  //     ]);
  //   };
  //    setOrderDetails(getAllOrderDetails());
  //   console.log(orderDetails);

  //   // getAllOrderDetails(order.order_details);
  // }, []);

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ mt: 2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1"
          id="panel1"
          sx={
            {
              // bgcolor: `${backgrdColor}`,
            }
          }
        >
          <Box sx={{ p: 0 }}>
            <Grid>
              <Grid item xs={2}>
                <Typography
                  variant="overline"
                  sx={{ width: "100%", flexShrink: 0, fontWeight: "bold" }}
                >
                  Order Id: 000{order.id}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="overline"
                  sx={{ width: "100%", flexShrink: 0}}
                >
                  Order Date: {orderDate}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="overline"
                  sx={{ width: "100%", flexShrink: 0, spacing: 0 }}
                >
                  Status: {order.status}
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="overline"
              sx={{ width: "100%", flexShrink: 0, lineHeight: 1            }}
            >
              Deliver to: {order.shippingAddress}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {orderDetails.map((detail, i) => {
            return <OrderDetail detail={detail} key={i} />;
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionDisplay;
