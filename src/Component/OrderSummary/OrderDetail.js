import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import {
  extractObj,
  calcTotalCost,
  calcQuantity,
  deleteWishlist,
} from "../utils";
import OrderTable from "./OrderTable";

const OrderDetail = (props) => {
  const orderDetails = extractObj(props.detail, [
    "back",
    "collar",
    "cuff",
    "fabric",
    "front",
    "pocket",
    "quantity",
    "singleprice",
    "totalprice",
    "measurement",
  ]);

  console.log(orderDetails);

  return (
    <TableContainer>
      <Table aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Items</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Subtotal</TableCell>
            <TableCell align="right" sx={{ textAlign: "center" }}>
              Total
            </TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          <OrderTable item={orderDetails} />
        </TableBody>
      </Table>
      <Divider />
    </TableContainer>
  );
};

export default OrderDetail;
