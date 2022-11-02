import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import MeasurementOptions from "./MeasurementOptions";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import RadioGroup from "@mui/material/RadioGroup";

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

const MeasurementModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [measurementId, setMeasurementId] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const measurements = props.measurementOptions;
  // console.log("here", props.measurementOptions);

  // const handleChange = (e) => {
  //   console.log("huat", e.target.value);
  // };

  return (
    <div>
      <Button align="center" sx={{ m: 0 }} onClick={handleOpen}>
        Set Your Size Profile here
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" component="h2" align="center">
            Choose your shirt measurement:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl
              component="form"
              id={props.index}
              onSubmit={(e) => {
                props.handleSetMeasurementId(e);
                handleClose();
              }}
            >
              <RadioGroup>
                {measurements.map((detail, i) => {
                  return (
                    <>
                      <FormControlLabel
                        control={<Radio />}
                        label={detail.categoryByUser}
                        value={detail.id}
                        onClick={(e) => props.handleIdChange(e)}
                      />
                      <MeasurementOptions key={i} measurement={detail} />
                    </>
                  );
                })}
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </RadioGroup>
            </FormControl>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MeasurementModal;
