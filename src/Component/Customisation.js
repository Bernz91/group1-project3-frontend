import React, { useState, useEffect } from "react";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../CSS/Fabrics.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Customisation = () => {
  const [fabrics, setFabrics] = useState([]);

  const [chosenFabric, setChosenFabric] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/fabrics`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setFabrics(res);
      });
  }, []);

  return (
    <div>
      <Typography variant="h3">
        <div>Customise your shirt</div>
      </Typography>
      <Typography>
        <div>You have chosen fabric {chosenFabric}.</div>
      </Typography>
      <Typography variant="h4">
        <div>Step One: Fabrics</div>
      </Typography>
      {fabrics.map((fabric, index) => {
        return (
          <card sx={{ maxWidth: 250 }}>
            <div key={index}>
              <ul className="InstaCard">
                <CardMedia
                  component="img"
                  alt="shirt"
                  width="250"
                  image={fabric.imageOne}
                />
                <CardContent>
                  <Typography variant="body1" component="div">
                    {fabric.fabricName}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Price: ${fabric.sellingPrice}
                  </Typography>
                  <Typography variant="body6" color="">
                    {fabric.description}
                  </Typography>
                  <Typography>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                      <Button
                        size="small"
                        fabricID={fabric.id}
                        onClick={(event) => {
                          var getFabricID =
                            event.target.getAttribute("fabricID");
                          setChosenFabric(getFabricID);
                        }}
                      >
                        Select me
                      </Button>
                    </CardActions>
                  </Typography>
                </CardContent>
              </ul>
            </div>
          </card>
        );
      })}
    </div>
  );
};
export default Customisation;
