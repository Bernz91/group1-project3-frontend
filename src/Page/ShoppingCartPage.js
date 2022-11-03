import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Search from "@mui/icons-material/Search";
import CartTable from "../Component/ShoppingCart/CartTable";
import EmptyCart from "../Component/ShoppingCart/EmptyCart";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
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
import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useAuth0 } from "@auth0/auth0-react";
import CircularIndeterminate from "../Component/ShoppingCart/CheckOutComponent/CircularProgress";
import RedirectLogin from "../Component/RedirectLogin";

const ShoppingCartPage = () => {
  let navigate = useNavigate();
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState();
  const [totalQuantity, setTotalQuantity] = useState();
  // const [isLoading, setLoading] = useState(true);
  const [change, setChange] = useState(true);
  const [measurementOptions, setMeasurementOptions] = useState([]);
  const [measurementId, setMeasurementId] = useState(null);

  //auth0
  const { user, getAccessTokenSilently, isAuthenticated, isLoading } =
    useAuth0();
  // const USERID = "3bab595a-78a4-48f6-b093-eea8726a796e";
  // const USERID = user.sub;

  useEffect(() => {
    const getWishlists = async () => {
      if (user) {
        try {
          const accessToken = await getAccessTokenSilently({
            audience: "https://group1-project3/api",
            scope: "read:current_user",
          });
          await axios
            .get(`${BACKEND_URL}/users/${user.sub}/wishlists`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((res) => res.data)
            .then((res) => {
              console.log(res);
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
                  measurement: res[i].measurement,
                  userId: user.sub,
                  quantity: 1,
                  price: calcTotalCost(item),
                  subtotal: calcTotalCost(item),
                };
              });
              console.log("newItems", newItems);
              setCart(newItems);
              // setLoading(false);
            });
          setChange(false);
        } catch (e) {
          console.log(e);
        }
      }
    };
    if (change) {
      // setLoading(true);
      getWishlists();
    }
  }, [user, change]);

  // get all the measurements from measurement profile
  // useEffect(() => {
  //   axios
  //     .get(`${BACKEND_URL}/users/${USERID}/measurements`)
  //     .then((res) => res.data)
  //     .then((res) => {
  //       setMeasurementOptions(res);
  //     });
  // }, []);

  // console.log(measurementOptions);

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

  const handleRemoveCartId = async (wishlistId) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://group1-project3/api",
        scope: "read:current_user",
      });
      await axios.delete(
        `${BACKEND_URL}/users/${user.sub}/wishlists/${wishlistId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    setChange(true);
  };

  // const handleIdChange = (e) => {
  //   console.log(e.target.value);
  //   setMeasurementId(e.target.value);
  //   console.log("something changed");
  // };

  // console.log("measurement id", measurementId);

  // const handleSetMeasurementId = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   const currWishlistId = e.target.id;
  //   const newCartCopy = [...cart];
  //   newCartCopy[currWishlistId].measurementId = measurementId;
  //   setCart(newCartCopy);
  // };
  // console.log(change);
  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      {!isAuthenticated ? (
        <div>
          <RedirectLogin />
        </div>
      ) : (
        <>
          <Container sx={{ display: "flex", flexDirection: "column", ml: -1 }}>
            <Typography
              variant="h5"
              align="left"
              sx={{ mt: 3, ml: 3, fontWeight: "bold" }}
            >
              My cart
            </Typography>
            {cart.length === 0 ? (
              <EmptyCart />
            ) : (
              <Box>
                <Table aria-label="simple table">
                  {/* <TableHead> */}
                  {/* <TableRow>
            <TableCell variant="head">Product Name</TableCell>
            <TableCell></TableCell>
            <TableCell
              variant="head"
              // align="right"
              sx={{ textAlign: "center" }}
            >
              Price
            </TableCell>
            <TableCell
              variant="head"
              // align="right"
              sx={{ textAlign: "center" }}
            >
              Quantity
            </TableCell>
            <TableCell
              variant="head"
              // align="right"
              sx={{ textAlign: "center" }}
            ></TableCell>
            <TableCell
              variant="head"
              // align="right"
              sx={{ textAlign: "center" }}
            >
              Total
            </TableCell>
          </TableRow> */}
                  {/* </TableHead> */}

                  {/* <TableBody> */}
                  {cart.map((item, index) => {
                    // console.log(item);
                    return (
                      <>
                        <CartTable
                          key={index}
                          wishlistId={item.wishlistId}
                          item={item}
                          index={index}
                          measurementOptions={measurementOptions}
                          measurementId={measurementId}
                          increaseCount={() => handleIncreaseCount(cart, index)}
                          decreaseCount={() => handleDecreaseCount(cart, index)}
                          handleRemoveCartId={() =>
                            handleRemoveCartId(item.wishlistId)
                          }
                          handleCalculateSubtotal={() =>
                            handleCalculateSubtotal(cart, index)
                          }
                          // handleSetMeasurementId={(e) => handleSetMeasurementId(e)}
                          // handleIdChange={(e) => handleIdChange(e)}
                        />
                      </>
                    );
                  })}
                  {/* </TableBody> */}
                </Table>
                <Divider />
                <CheckOutComponent totalCost={totalCost} />
                <Box align="center " mt={2}>
                  <CheckOutModal
                    orders={cart}
                    totalCost={totalCost}
                    totalQuantity={totalQuantity}
                    setChange={() => setChange(true)}
                  />
                </Box>
              </Box>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default ShoppingCartPage;
