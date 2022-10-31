import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const InfoModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const item = props.item;

  return (
    <div>
      <Button align="center" sx={{ m:0 }} onClick={handleOpen}>
        View customisation
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" component="h2">
            Your Shirt Design:
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            variant="overline"
          >
            <Box>Fabric type: {item["fabric"].fabricName}</Box>
            <Box>Collar type: {item["collar"].collarName}</Box>
            <Box>Front type: {item["front"].frontName}</Box>
            <Box>Back type: {item["back"].backName}</Box>
            <Box>Cuff type: {item["cuff"].cuffName}</Box>
            <Box>Pocket type: {item["pocket"].pocketName}</Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default InfoModal;
