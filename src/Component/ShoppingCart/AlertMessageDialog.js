import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const AlertMessageDialog = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        id={props.id}
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are about to delete this order. Once deleted, it will be removed
            permanently
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=> {props.handleRemoveCartId();props.handleClose()}} color = "error">
            Delete
          </Button>
          <Button onClick={props.handleClose} autoFocus>
            Go back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertMessageDialog;
