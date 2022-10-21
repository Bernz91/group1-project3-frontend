import React, { useState, useEffect } from "react";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";



const CheckOutComponent = (props) => {

    return (
        <Table sx={{ minWidth: 800 }} aria-label="simple table" sx = {{ bgcolor: "#d4e9e2", color: "black", fontWeight: 'bold'}} >
             <TableRow>
                <TableCell component="th" scope="row" align="right">
                  <Typography>Subtotal</Typography>
                </TableCell>
                <TableCell component="th" scope="row" align="right" sx={{ textAlign: "right" }}>
                  <Typography variant = "overline">XX</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row" align="right">
                  <Typography >Shipping fees</Typography>
                </TableCell>
                <TableCell component="th" scope="row" align="right" sx={{ textAlign: "right" }}>
                  <Typography variant = "overlineh6">7</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row" align="right">
                  <Typography >Total</Typography>
                </TableCell>
                <TableCell component="th" scope="row" align="right" sx={{ textAlign: "right" }}>
                  <Typography variant = "overline">189</Typography>
                </TableCell>
            </TableRow>

            
        </Table>
    )
}

export default CheckOutComponent

