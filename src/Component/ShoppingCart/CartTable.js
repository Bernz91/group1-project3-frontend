import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Input from "@mui/material/Input";
import ButtonGroup from "@mui/material/ButtonGroup";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertMessageDialog from "./AlertMessageDialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const CartTable = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const item = props.item;
  console.log(item.wishlistId);

  return (
    <>
      <TableRow
        index={item.wishlistId}
        key={item.id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell component="th" scope="row">
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={item["fabric"].imageOne}
            alt={item["fabric"].description}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          <Box>Fabric type: {item["fabric"].fabricName}</Box>
          <Box>Collar type: {item["collar"].collarName}</Box>
          <Box>Front type: {item["front"].frontName}</Box>
          <Box>Back type: {item["back"].backName}</Box>
          <Box>Cuff type: {item["cuff"].cuffName}</Box>
          <Box>Pocket type: {item["pocket"].pocketName}</Box>
          <Box>
            <Link href="#">Edit shirt design</Link>
          </Box>
        </TableCell>

        <TableCell component="th" scope="row" align="center">
          <Box>{item["fabric"].cost}</Box>
          <Box>View breakdown</Box>
        </TableCell>
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
            <Box sx={{ p: 0, mr: 0 }}>
              <TextField
                value={item.quantity}
                sx={{ p: 0, mr: 0, textAlign: "middle" }}
              ></TextField>
            </Box>
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
        <TableCell align="right">
          <IconButton aria-label="delete" size="large">
            <DeleteIcon onClick={() => handleClickOpen()} />
          </IconButton>
        </TableCell>
        <TableCell align="right">{item.subtotal}</TableCell>
      </TableRow>
      <AlertMessageDialog
        open={open}
        handleClose={handleClose}
        handleRemoveCartId={props.handleRemoveCartId}
      />
    </>
  );
};

export default CartTable;
