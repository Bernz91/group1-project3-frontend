import React, { useState, useEffect } from "react";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../CSS/Fabrics.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const Fabrics = () => {
  const [fabrics, setFabrics] = useState([]);
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
      <Typography variant="h4">Step One: Fabrics</Typography>
      {fabrics.map((fabric, index) => {
        return (
          <card sx={{ maxWidth: 250 }}>
            <ul className="InstaCard">
              <div key={index}>
                <CardMedia
                  component="img"
                  alt="shirt"
                  width="250"
                  image={fabric.image_one}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {fabric.fabric_name}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${fabric.selling_price}
                  </Typography>
                  <Typography variant="body2" color="">
                    {fabric.description}
                  </Typography>
                  <Typography>
                    <CardActions>
                      <Button size="small">
                        <img
                          className="likebtn"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1920px-Heart_coraz%C3%B3n.svg.png"
                          alt="Like Button"
                        />
                      </Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Typography>
                </CardContent>
              </div>
            </ul>
          </card>
        );
      })}
    </div>
  );
};
export default Fabrics;
