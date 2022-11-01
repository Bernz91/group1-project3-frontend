import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import MeasurementOptions from "./MeasurementOptions"
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import RadioGroup from '@mui/material/RadioGroup';


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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const measurements = props.measurements
console.log("here", props.measurements)

  return (
    <div>
      <Button align="center" sx={{ m:0 }} onClick={handleOpen}>
        Choose your size profile
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
            <FormControl>
                <RadioGroup>
                {measurements.map ((detail, i) => {
                return (
                    <FormControlLabel control = {<Radio />} >

                        <MeasurementOptions key = {i} measurement = {detail} control = {<Radio />}/>

                    </FormControlLabel>
                
                )
            })} 
                </RadioGroup>
            
            </FormControl>         
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MeasurementModal;
