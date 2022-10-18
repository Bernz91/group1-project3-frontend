
import React, { useState, useEffect } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { drawerClasses } from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import FilledInput from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from "@mui/material/TextField";

import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import Comment from "@mui/icons-material/Comment";
import Settings from "@mui/icons-material/Settings";
import Search from "@mui/icons-material/Search";
import Notifications from "@mui/icons-material/Notifications";

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

const [itemCount, setItemCount] = useState(1);

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
          AppEdgeSidebar: {
            styleOverrides: {
              root: {
                [`& .${drawerClasses.paper}`]: {
                  backgroundColor: "rgba(0,0,0,0)",
                  border: "none",
                },
              },
            },
          },
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
                // xs: {
                //     variant: "permanent",
                //     width: 80,
                // },
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
          <EdgeSidebar anchor="left">
            <SidebarContent
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
      
            </SidebarContent>
          </EdgeSidebar>
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
              <Box p={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card variant="outlined">
                        <CardHeader
                          title="Product name"
                          subheader= "View details"
                        />
                        <CardMedia
                          component="img"
                          height="194"
                          image="https://dynamic.zacdn.com/TIqU0jk90hPxnuO44NnNXO4B1AU=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/fila-4662-609589-1.jpg"
                          alt="Fila shirt"
                        />
                        <ButtonGroup>
                        <Button
                          onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                          }}
                        
                        >+
                        </Button>
                        <Button
                          onClick={() => {
                            setItemCount(itemCount + 1);
                          }}
                        >-
                        </Button>
                      </ButtonGroup>
                        <CardContent>
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ marginBottom: 6 }}
                          />
                          <Skeleton animation="wave" height={10} width="80%" />
                        </CardContent>
                      </Card>
                    </Grid>
                </Grid>
              </Box>
            </InsetContainer>
          </Content>
          <Footer>
            <Paper sx={{ mr: 2, borderRadius: "20px", p: 2 }}>
              <Typography variant="body2">
                <b>XX Company. 2022 All rights reserved</b>
              </Typography>
            </Paper>
          </Footer>
        </Root>
      </Fullscreen>
    </ThemeProvider>
  );
};

export default ShoppingCartPage;