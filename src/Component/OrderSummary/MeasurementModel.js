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
  width: 200,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const MeasurementModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const measurement = props.measurements;

  return (
    <div>
      <Button align="center" sx={{ mt: 0 }} onClick={handleOpen}>
        View measurements
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" component="h2">
            Your measurement profile:
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1 }}
            variant="overline"
          >
            <Box>
              Collar: {measurement.collar}
              {measurement.measurementType}
            </Box>
            <Box>
              Chest: {measurement.chest}
              {measurement.measurementType}
            </Box>
            <Box>
              Elbow: {measurement.elbow}
              {measurement.measurementType}
            </Box>
            <Box>
              Left cuff: {measurement.leftCuff}
              {measurement.measurementType}
            </Box>
            <Box>
              Right cuff: {measurement.rightCuff}
              {measurement.measurementType}
            </Box>
            <Box>
              Shirt Length: {measurement.shirtLength}
              {measurement.measurementType}
            </Box>
            <Box>
              Shoulder: {measurement.shoulders}
              {measurement.measurementType}
            </Box>
            <Box>
              Sleeve's length: {measurement.sleevesLength}
              {measurement.measurementType}
            </Box>
            <Box>
              Sleeve's width: {measurement.sleevesWidth}
              {measurement.measurementType}
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MeasurementModal;
