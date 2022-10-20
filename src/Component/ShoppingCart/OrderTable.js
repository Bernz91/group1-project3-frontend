import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Input from "@mui/material/Input";
import ButtonGroup from "@mui/material/ButtonGroup";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import AlertMessageDialog from "./AlertMessageDialog";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const OrderTable = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const order = props.order;
  // to be used when backend is ready
  // useEffect(() => {
  //   axios
  //     .get(`${BACKEND_URL}/orders`)
  //     .then((res) => res.data)
  //     .then((res) => {
  //       console.log(res);
  //       setOrders(res);
  //     });
  // }, []);
  return (
    <>
      <TableRow
        key={order.id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell component="th" scope="row">
          {order.name}
        </TableCell>
        <TableCell component="th" scope="row">
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={order.image}
            alt="Fila shirt"
          />
        </TableCell>
        <TableCell align="right">{order.price}</TableCell>
        <TableCell align="right">
          <ButtonGroup>
            <Button
              style={{
                backgroundColor: "red",
              }}
              variant="contained"
              sx={{ color: "white" }}
              onClick={() => {
                props.decreaseCount();
              }}
            >
              -
            </Button>
            <Input value={order.quantity} sx={{ p: 0, mr: 0 }} />
            <Button
              style={{
                backgroundColor: "green",
              }}
              sx={{ color: "white" }}
              onClick={() => {
                props.increaseCount();
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </TableCell>
        <TableCell align="right">{order.total}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="delete" size="large">
            <DeleteIcon onClick={(e) => props.handleClickOpen(e)} />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default OrderTable;
