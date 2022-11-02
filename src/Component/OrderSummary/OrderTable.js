import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Input from "@mui/material/Input";
import ButtonGroup from "@mui/material/ButtonGroup";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import InfoModal from "./InfoModal";
import MeasurementModal from "./MeasurementModel";
import { Typography } from "@mui/material";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const OrderTable = (props) => {
  const item = props.item;
  const measurements = item.measurement;
  console.log(item.measurement);

  return (
    <>
      <TableRow
        key={item.id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell component="th" scope="row">
          <Grid>
            <CardMedia
              component="img"
              sx={{ height: "25vh", width: "25vw" }}
              image={item["fabric"].imageOne}
              alt={item["fabric"].description}
            />
        
            {/* <MeasurementModal measurements={measurements} /> */}
          </Grid>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          <InfoModal item={item} sx = {{p:-1}} />
          <Box sx ={{m: 0}}>
          <Typography variant = "overline" sx= {{lineHeight:0, fontFamily: 'Monospace'}} >Quantity: {item.quantity}</Typography>
          </Box>
          <Box>
          <Typography variant = "overline" sx= {{lineHeight:0, fontFamily: 'Monospace'}} >Single Price: ${item.singleprice}</Typography>
          </Box>
          <Box>
          <Typography variant = "overline" sx= {{lineHeight:0, fontFamily: 'Monospace' }} >Total Price: ${item.totalprice}</Typography>
          </Box>
        </TableCell>
    
      </TableRow>
    </>
  );
};

export default OrderTable;
