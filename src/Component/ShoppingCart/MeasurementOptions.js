import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";

const MeasurementOptions = (props) => {
  const measurement = props.measurement;
  console.log(measurement);
  return (
    // <>hello</>
    // <FormControlLabel control = {<Radio />} label = {measurement.categoryByUser} >
    <Box>
      {/* <Typography id="modal-modal-title" component="h2">
            Category: {measurement.categoryByUser}
          </Typography> */}
      <Typography
        id="modal-modal-description"
        sx={{ m: 0, p: 0 }}
        variant="caption"
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
    // </FormControlLabel>
  );
};

export default MeasurementOptions;
