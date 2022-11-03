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
import CircularIndeterminate from "../Component/ShoppingCart/CheckOutComponent/CircularProgress";
import RedirectLogin from "../Component/RedirectLogin";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const OrderSummaryPage = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  // const USERID = "3bab595a-78a4-48f6-b093-eea8726a796e";
  const [change, setChange] = useState(true);
  const { user, getAccessTokenSilently, isAuthenticated, isLoading } =
    useAuth0();
  // const USERID = user.sub;

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: "https://group1-project3/api",
          scope: "read:current_user",
        });
        await axios
          .get(`${BACKEND_URL}/orders/${user.sub}/`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
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
            // console.log(orders);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getAllOrders();
  }, []);

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      {!isAuthenticated ? (
        <>
          <RedirectLogin />
        </>
      ) : (
        <Container>
          <Typography
            variant="h5"
            align="left"
            sx={{ mt: 3, ml: 3, fontWeight: "bold" }}
          >
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
      )}
    </>
  );
};

export default OrderSummaryPage;
