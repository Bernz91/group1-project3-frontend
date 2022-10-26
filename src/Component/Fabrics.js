import React, { useState, useEffect } from "react";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../CSS/Fabrics.css";

// make an array consisting of each step (strings)
// click next to step two then it moves the array to the collars;
// pass that array to the Typography step one page; and all the
// useState will have 7 states; states will const [collars, setCollars] = useState([]);
//----
//saving user selections in useContext? or another database?
///// pass props into one (higher level)* page ----> when you hit submit you push all 7 into checkout;
///// at checkout you can choose whether to pass to "save for later" by hitting relevant button at cart stage
////////// save for later / cart is one table
////////// user saves a selection of 7
///// quantity saved in the shopping cart state;
///// when the user orders remove from wishlist;

/////* create  a shirt customisation page;
///// parent is the page; child is the component (fabrics/collars etc)

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
    <div className="fabric">
      <Typography variant="h4">Step One: Fabrics</Typography>
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
                  <Typography variant="h6" component="div">
                    {fabric.fabricName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${fabric.sellingPrice}
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
              </ul>
            </div>
          </card>
        );
      })}
    </div>
  );
};
export default Fabrics;
