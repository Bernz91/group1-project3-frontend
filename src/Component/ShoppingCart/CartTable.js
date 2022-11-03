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
import InfoModal from "../OrderSummary/InfoModal";
import MeasurementModal from "./MeasurementModal";
import { AddBoxOutlined } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

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
  console.log(props.index);

  return (
    <>
      <TableRow
        index={item.wishlistId}
        key={item.id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell variant="body" component="th" scope="row">
          <CardMedia
            component="img"
            sx={{ m: 0, p: 0, height: "25vh", width: "25vw" }}
            image={item["fabric"].imageOne}
            alt={item["fabric"].description}
          />
        </TableCell>
        <TableCell variant="body" component="th" scope="row">
          <Typography sx={{ ml: 0, fontWeight: "bold" }}>
            Price: ${item.price}
          </Typography>
          <Box>
            {/* <MeasurementModal
              measurementOptions={props.measurementOptions}
              handleSetMeasurementId={(e) => props.handleSetMeasurementId(e)}
              index={props.index}
              handleIdChange={props.handleIdChange}
              measurementId={props.measurementId}
            /> */}
          </Box>
          {/* <Box>
            <Link href="#">Edit shirt design</Link>
          </Box> */}
          <Box sx={{ m: 0 }}>
            <InfoModal item={item} />
          </Box>
          <ButtonGroup sx={{ ml: 0, mt: 0.5 }}>
            <Button
              style={{
                backgroundColor: "#F2F1F0",
              }}
              variant="contained"
              sx={{
                color: "black",
                borderRadius: 0,
                m: 0,
                p: 0,
                width: "10",
                height: "10",
              }}
              onClick={() => {
                props.decreaseCount();
              }}
            >
              -
            </Button>
            <Box sx={{ m: 1 }}>{item.quantity}</Box>
            <Button
              style={{
                backgroundColor: "#F2F1F0",
              }}
              variant="contained"
              sx={{
                color: "black",
                borderRadius: 0,
                m: 0,
                p: 0,
                width: "10",
                height: "10",
              }}
              onClick={() => {
                props.increaseCount();
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </TableCell>
        <TableCell align="right">
          <Grid>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon onClick={() => handleClickOpen()} />
            </IconButton>
            <Box>${item.subtotal}</Box>
          </Grid>
        </TableCell>
        {/* <TableCell align="right">${item.subtotal}</TableCell> */}
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
