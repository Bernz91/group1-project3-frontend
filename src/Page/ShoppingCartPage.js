import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Search from "@mui/icons-material/Search";
import CartTable from "../Component/ShoppingCart/CartTable";
import EmptyCart from "../Component/ShoppingCart/EmptyCart";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CheckOutComponent from "../Component/ShoppingCart/CheckOutComponent";
import CheckOutModal from "../Component/ShoppingCart/CheckOutComponent/CheckOutModal";
import {
  extractArr,
  calcTotalCost,
  calcQuantity,
  deleteWishlist,
} from "../Component/utils";
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";

const ShoppingCartPage = () => {
  let navigate = useNavigate();
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const USERID = "834fc3ef-6ccc-4ba4-a54e-1a75387da94f";

  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState();
  const [totalQuantity, setTotalQuantity] = useState();
  const [change, setChange] = useState(true);

  useEffect(() => {
    if (change) {
      axios
        .get(`${BACKEND_URL}/users/${USERID}/wishlists`)
        .then((res) => res.data)
        .then((res) => {
          // console.log(res.length);
          // extract the keys to display
          const items = extractArr(res, [
            "fabric",
            "cuff",
            "back",
            "pocket",
            "front",
            "collar",
          ]);
          // add in new fields
          const newItems = items.map((item, i) => {
            // console.log(item);
            return {
              ...item,
              wishlistId: res[i].id,
              userId: USERID,
              quantity: 1,
              price: calcTotalCost(item),
              subtotal: calcTotalCost(item),
            };
          });
          // console.log(newItems)
          setCart(newItems);
        });
      setChange(false);
    }
  }, [change]);

  useEffect(() => {
    const handleCalculateTotalCost = (cart) => {
      const shippingFees = 0;
      // console.log(cart);
      const sum = cart.reduce((prev, curr) => prev + curr.subtotal, 0);
      return sum + shippingFees;
    };

    const handleCalcTotalQuantity = (cart) => {
      const quantities = calcQuantity(extractArr(cart, ["quantity"]));
      return quantities;
    };

    console.log("totalcost", handleCalculateTotalCost(cart));
    console.log("totalquantities", handleCalcTotalQuantity(cart));
    setTotalQuantity(handleCalcTotalQuantity(cart));
    setTotalCost(handleCalculateTotalCost(cart));
  }, [cart]);

  const handleCalculateSubtotal = (cartItems, index) => {
    const newCartCopy = [...cartItems];
    newCartCopy[index].subtotal =
      newCartCopy[index].price * newCartCopy[index].quantity;
    setCart(newCartCopy);
  };

  const handleIncreaseCount = (cartItems, index) => {
    const newCartCopy = [...cartItems];
    newCartCopy[index].quantity += 1;
    setCart(newCartCopy);
    handleCalculateSubtotal(cartItems, index);
  };

  const handleDecreaseCount = (cartItems, index) => {
    const newCartCopy = [...cartItems];

    if (newCartCopy[index].quantity > 1) {
      newCartCopy[index].quantity -= 1;
    } else {
      //minimum order is 1
      newCartCopy[index].quantity = 1;
    }

    setCart(newCartCopy);
    handleCalculateSubtotal(cartItems, index);
  };

  const handleRemoveCartId = (wishlistId) => {
    console.log(wishlistId);
    console.log("tried deleting");
    deleteWishlist(USERID, wishlistId);
    setChange(true);
  };

  return (
    <Container>
      <Typography variant="h5" align="center" sx={{ mt: 2 }}>
        My cart
      </Typography>
      {cart.length !== 0 ? (
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell></TableCell>
                <TableCell align="right" sx={{ textAlign: "center" }}>
                  Price
                </TableCell>
                <TableCell align="right" sx={{ textAlign: "center" }}>
                  Quantity
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ textAlign: "center" }}
                ></TableCell>
                <TableCell align="right" sx={{ textAlign: "center" }}>
                  Total
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {cart.map((item, index) => {
                // console.log(item);
                return (
                  <>
                    <CartTable
                      key={index}
                      wishlistId={item.wishlistId}
                      item={item}
                      increaseCount={() => handleIncreaseCount(cart, index)}
                      decreaseCount={() => handleDecreaseCount(cart, index)}
                      handleRemoveCartId={() =>
                        handleRemoveCartId(item.wishlistId)
                      }
                      handleCalculateSubtotal={() =>
                        handleCalculateSubtotal(cart, index)
                      }
                    />
                  </>
                );
              })}
            </TableBody>
          </Table>
          <Divider />
          <CheckOutComponent totalCost={totalCost} />
          <Box align="center " mt={2}>
            <CheckOutModal
              orders={cart}
              totalCost={totalCost}
              totalQuantity={totalQuantity}
            />
          </Box>
        </TableContainer>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default ShoppingCartPage;
