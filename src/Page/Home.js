import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClick}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClick}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      This is home
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClick}
        message="Note archived"
        action={action}
      />
    </div>
  );
};

export default Home;
