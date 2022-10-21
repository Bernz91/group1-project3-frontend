import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import FilledInput from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Search from "@mui/icons-material/Search";
import CartTable from "../Component/ShoppingCart/CartTable";
import EmptyCart from "../Component/ShoppingCart/EmptyCart";
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
  Root,
  Header,
  EdgeSidebar,
  SidebarContent,
  Content,
  Fullscreen,
  InsetContainer,
  InsetSidebar,
  Footer,
} from "@mui-treasury/layout";

// https://github.com/tailwindlabs/tailwindcss/blob/master/colors.js#L244
const coolGray = {
  50: "#f9fafb",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827",
};

const ShoppingCartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Fila shirt",
      image:
        "https://dynamic.zacdn.com/TIqU0jk90hPxnuO44NnNXO4B1AU=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/fila-4662-609589-1.jpg",
      price: 29,
      quantity: 1,
      subtotal: 29,
    },
    {
      id: 2,
      name: "Another shirt",
      image:
        "https://dynamic.zacdn.com/TIqU0jk90hPxnuO44NnNXO4B1AU=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/fila-4662-609589-1.jpg",
      price: 39,
      quantity: 1,
      subtotal: 39,
    },
  ]);

  const [total, setTotal] = useState();

  useEffect(() => {
    const handleCalculateTotal = (cart) => {
      const sum = cart.reduce((prev, curr) => prev + curr.subtotal, 0);
      const shippingFees = 7;
      console.log(sum);
      return sum + shippingFees;
    };
    console.log(cart);
    setTotal(handleCalculateTotal(cart));
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

  const handleRemoveCartId = (index) => {
    console.log("tried deleting");
    console.log(index);
    const newCartCopy = [...cart].slice();

    // find the correct id here and remove it accordingly
    newCartCopy.splice(index, 1);
    return setCart(newCartCopy);
  };

  console.log(cart);

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: { main: coolGray[800] },
          text: {
            primary: coolGray[900],
            secondary: coolGray[600],
            disabled: coolGray[300],
          },
          background: {
            default: coolGray[100],
            paper: "#fff",
          },
          grey: coolGray,
        },
        components: {
          // AppEdgeSidebar: {
          //   styleOverrides: {
          //     root: {
          //       [`& .${drawerClasses.paper}`]: {
          //         backgroundColor: "rgba(0,0,0,0)",
          //         border: "none",
          //       },
          //     },
          //   },
          // },
          AppContent: {
            styleOverrides: {
              root: {
                marginBottom: 16,
              },
            },
          },
          AppInsetSidebar: {
            styleOverrides: {
              root: {
                padding: 16,
                paddingLeft: 0,
              },
            },
          },
          AppFooter: {
            styleOverrides: {
              root: {
                marginBottom: 20,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 40,
              },
            },
          },
          MuiFilledInput: {
            styleOverrides: {
              root: {
                [`&.${inputBaseClasses.hiddenLabel}`]: {
                  borderRadius: 40,
                },
                backgroundColor: coolGray[100],
                "&:hover": {
                  backgroundColor: coolGray[200],
                },
                "&.Mui-focused": {
                  boxShadow: `0 0 0 1px ${coolGray[500]}`,
                  backgroundColor: "#fff",
                },
              },
            },
          },
          MuiPaper: {
            defaultProps: {
              elevation: 0,
            },
          },
          MuiSkeleton: {
            styleOverrides: {
              root: {
                backgroundColor: coolGray[200],
              },
            },
          },
        },
      })}
    >
      <Fullscreen>
        <Root
          scheme={{
            header: {
              config: {
                xs: {
                  position: "sticky",
                  height: 80,
                },
              },
            },
            leftEdgeSidebar: {
              config: {
                xs: {
                  variant: "permanent",
                  width: 80,
                },
                md: {
                  variant: "permanent",
                  width: 120,
                },
              },
            },
            rightEdgeSidebar: {
              config: {
                md: {
                  variant: "permanent",
                  width: 80,
                },
              },
            },
            rightInsetSidebar: {
              config: {
                sm: {
                  position: "sticky",
                  width: "max(33%, 256px)",
                },
              },
            },
          }}
        >
          <CssBaseline />
          <Header>
            <Box
              sx={{
                mt: 3,
                mr: 2,
                px: 2,
                flexGrow: 1,
                minWidth: 0,
                display: "flex",
                gap: 2,
                bgcolor: "background.paper",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                alignItems: "center",
              }}
            >
              <Typography variant="h5">
                <b>My Cart</b>
              </Typography>
              <FilledInput
                size="small"
                disableUnderline
                hiddenLabel
                placeholder="Search..."
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </Box>
          </Header>
          <Content>
            <InsetContainer
              maxWidth={false}
              disableGutters
              sx={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                bgcolor: "background.paper",
                mr: 2,
              }}
            >
              <TableContainer component={Paper}>
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
                  {cart.length !== 0 ? (
                    <TableBody>
                      {cart.map((item, index) => {
                        return (
                          <>
                            <CartTable
                              key={index}
                              index={index}
                              item={item}
                              increaseCount={() =>
                                handleIncreaseCount(cart, index)
                              }
                              decreaseCount={() =>
                                handleDecreaseCount(cart, index)
                              }
                              handleRemoveCartId={() =>
                                handleRemoveCartId(index)
                              }
                              handleCalculateSubtotal={() =>
                                handleCalculateSubtotal(cart, index)
                              }
                            />
                          </>
                        );
                      })}
                    </TableBody>
                  ) : (
                    <EmptyCart />
                  )}
                </Table>
                <Divider />
                <CheckOutComponent total={total} />
                <CheckOutModal orders={cart} total={total} />
              </TableContainer>
            </InsetContainer>
          </Content>

          <Footer>
            <Paper sx={{ mr: 2, borderRadius: "20px", p: 2 }}>
              <Typography variant="body2">
                <b>The Shirt Company. 2022 All rights reserved</b>
              </Typography>
            </Paper>
          </Footer>
        </Root>
      </Fullscreen>
    </ThemeProvider>
  );
};

export default ShoppingCartPage;
