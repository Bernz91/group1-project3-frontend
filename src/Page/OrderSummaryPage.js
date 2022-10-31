import { React, useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import EmptyOrder from "../Component/OrderSummary/EmptyOrder";
import AccordionDisplay from "../Component/OrderSummary/AccordionDisplay";
import { Typography } from "@mui/material";
import {
  extractArr,
  extractObj,
  calcTotalCost,
  calcQuantity,
  deleteWishlist,
} from "../Component/utils";

const OrderSummaryPage = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  //   const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
  //   useAuth0();

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const USERID = "3bab595a-78a4-48f6-b093-eea8726a796e";
  const [change, setChange] = useState(true);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/orders/${USERID}/`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        const allOrders = extractArr(res, [
          "id",
          "shippingAddress",
          "status",
          "createdAt",
          "quantity",
          "order_details",
        ]);

        setOrders(allOrders);
        console.log(orders);
      });
  }, []);

  console.log(orders);

  return (
    <Container>
      <Typography variant="h5" align="center" sx={{ mt: 2 }}>
        My orders
      </Typography>

      {orders.length !== 0 ? (
        <Container>
          {orders.map((order, i) => {
            return (
              <AccordionDisplay
                order={order}
                orderDetails={orderDetails}
                key={i}
              />
            );
          })}
        </Container>
      ) : (
        <EmptyOrder />
      )}
    </Container>
  );
};

export default OrderSummaryPage;
