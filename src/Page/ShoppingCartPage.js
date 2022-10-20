import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { drawerClasses } from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import FilledInput from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Search from "@mui/icons-material/Search";
import OrderTable from "../Component/ShoppingCart/OrderTable";
import EmptyCart from "../Component/ShoppingCart/EmptyCart";
import AlertMessageDialog from "../Component/ShoppingCart/AlertMessageDialog";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";

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
  const [subtotal, setTotal] = useState();
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Fila shirt",
      image:
        "https://dynamic.zacdn.com/TIqU0jk90hPxnuO44NnNXO4B1AU=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/fila-4662-609589-1.jpg",
      price: 29,
      quantity: 3,
      subtotal: 29,
    },
    {
      id: 2,
      name: "Another shirt",
      image:
        "https://dynamic.zacdn.com/TIqU0jk90hPxnuO44NnNXO4B1AU=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/fila-4662-609589-1.jpg",
      price: 39,
      quantity: 2,
      subtotal: 19,
    },
  ]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIncreaseCount = (cartItems, index) => {
    const newCartCopy = [...cartItems];
    newCartCopy[index].quantity += 1;
    setCart(newCartCopy);
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
  };

  // const handleRemoveCartId = (cartItems, index) => {
  //   const newCartCopy = [...cartItems];
  //   console.log("tried deleting");
  //   // console.log(newCartCopy[index]);
  //   // console.log(index);
  //   // const newCartCopy = [...cartItems].slice();

  //   // //find the correct id here and remove it accordingly
  //   // newCartCopy.splice(index, 1);
  //   // return setCart(newCartCopy);
  // };

  const handleRemoveCartId = (e) => {
    console.log("tried deleting");
    console.log(e);
    console.log(e.target.id);
  };

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
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                      <TableCell align="right" sx={{ textAlign: "center" }}>
                        Subtotal
                      </TableCell>
                      <TableCell align="right" sx={{ textAlign: "center" }}>
                        Cancel
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((order, index) => {
                      console.log(index);
                      return (
                        <>
                          <OrderTable
                            key={index}
                            index={index}
                            order={order}
                            increaseCount={() =>
                              handleIncreaseCount(cart, index)
                            }
                            decreaseCount={() =>
                              handleDecreaseCount(cart, index)
                            }
                            handleClickOpen={() => handleClickOpen()}
                          />
                        </>
                      );
                    })}
                  </TableBody>
                </Table>
                <AlertMessageDialog
                  id={cart.id}
                  open={open}
                  handleClose={(e) => handleClose(e)}
                  handleRemoveCartId={(e) => handleRemoveCartId(e)}
                />
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
