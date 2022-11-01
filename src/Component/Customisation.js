import React, { useState, useEffect } from "react";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../CSS/Fabrics.css";
//
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Customisation = () => {
  //sendToWishist
  const [sendToWishlist, setSendToWishlist] = useState([]);

  //fabrics
  const [fabrics, setFabrics] = useState([]);
  const [chosenFabric, setChosenFabric] = useState([]);

  //fabrics useEffect
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/fabrics`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setFabrics(res);
      });
  }, []);

  //collars
  const [collars, setCollars] = useState([]);
  const [chosenCollar, setChosenCollar] = useState([]);

  //collars useEffect
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/collars`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setCollars(res);
      });
  }, []);

  //cuffs
  const [cuffs, setCuffs] = useState([]);
  const [chosenCuff, setChosenCuff] = useState([]);

  //cuffs useEffect
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/cuffs`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setCuffs(res);
      });
  }, []);

  //fronts
  const [fronts, setFronts] = useState([]);
  const [chosenFront, setChosenFront] = useState([]);

  //fronts useEffect
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/fronts`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setFronts(res);
      });
  }, []);

  //pockets
  const [pockets, setPockets] = useState([]);
  const [chosenPocket, setChosenPocket] = useState([]);

  //pockets useEffect

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/pockets`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setPockets(res);
      });
  }, []);

  //backs
  const [backs, setBacks] = useState([]);
  const [chosenBack, setChosenBack] = useState([]);

  //backs useEffect
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/backs`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setBacks(res);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1603251579431-8041402bdeda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
      }}
    >
      <Typography variant="h6">
        <div>Customise your shirt</div>
      </Typography>
      <Typography variant="caption">
        <div>
          You have chosen fabric {chosenFabric}, collar {chosenCollar}, cuff
          {chosenCuff}, front {chosenFront}, pocket {chosenPocket}, back{" "}
          {chosenBack}. We are sending to wishlist {sendToWishlist}.
        </div>

        <Button
          variant="contained"
          sx={{
            width: 190,
            fontSize: "10px",
          }}
          onClick={(event) => {
            event.preventDefault();
            setSendToWishlist(
              { chosenFabric },
              { chosenCollar },
              { chosenCuff },
              { chosenFront },
              { chosenPocket },
              { chosenBack }
            );
            console.log("setSendToWishList is " + { sendToWishlist });
          }}
        >
          Add choices to wishlist
        </Button>
      </Typography>
      <div>
        <Typography variant="Overline" color="black">
          Step One: Choose your fabric
        </Typography>
      </div>
      <div class="container">
        {fabrics.map((fabric, index) => {
          return (
            <card sx={{ maxWidth: 250 }}>
              <div key={index}>
                <CardActions>
                  <ul className="InstaCard">
                    <CardMedia
                      component="img"
                      alt="shirt"
                      width="250"
                      image={fabric.imageOne}
                      fabricID={fabric.id}
                      onClick={(event) => {
                        var getFabricID = event.target.getAttribute("fabricID");
                        setChosenFabric(getFabricID);
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="overline"
                        fontWeight="regular"
                        component="div"
                        lineHeight="1"
                      >
                        {fabric.fabricName}
                      </Typography>
                      <Typography variant="caption" component="div">
                        Price: ${fabric.cost}
                      </Typography>
                    </CardContent>
                  </ul>
                </CardActions>
              </div>
            </card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Two: Choose your collar
        </Typography>
      </div>
      <div class="container">
        {collars.map((collar, index) => {
          return (
            <card sx={{ maxWidth: 250 }}>
              <div key={index}>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="collar"
                      width="250"
                      image={collar.imageOne}
                      collarID={collar.id}
                      onClick={(event) => {
                        var getCollarID = event.target.getAttribute("collarID");
                        setChosenCollar(getCollarID);
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="overline"
                        fontWeight="regular"
                        component="div"
                        lineHeight="1"
                      >
                        {collar.collarName}
                      </Typography>
                      <Typography variant="caption" component="div">
                        Price: ${collar.cost}
                      </Typography>
                    </CardContent>
                  </ul>
                </CardActions>
              </div>
            </card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Three: Choose your cuff
        </Typography>
      </div>
      <div class="container">
        {cuffs.map((cuff, index) => {
          return (
            <card sx={{ maxWidth: 250 }}>
              <div key={index}>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="cuff"
                      width="250"
                      image={cuff.imageOne}
                      cuffID={cuff.id}
                      onClick={(event) => {
                        var getCuffID = event.target.getAttribute("cuffID");
                        setChosenCuff(getCuffID);
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="overline"
                        fontWeight="regular"
                        component="div"
                        lineHeight="1"
                      >
                        {cuff.cuffName}
                      </Typography>
                      <Typography variant="caption" component="div">
                        Price: ${cuff.cost}
                      </Typography>
                    </CardContent>
                  </ul>
                </CardActions>
              </div>
            </card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Four: Choose your fronts
        </Typography>
      </div>
      <div class="container">
        {fronts.map((front, index) => {
          return (
            <card sx={{ maxWidth: 250 }}>
              <div key={index}>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="fronts"
                      width="250"
                      image={front.imageOne}
                      frontID={front.id}
                      onClick={(event) => {
                        var getFrontID = event.target.getAttribute("FrontID");
                        setChosenFront(getFrontID);
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="overline"
                        fontWeight="regular"
                        component="div"
                        lineHeight="1"
                      >
                        {front.frontName}
                      </Typography>
                      <Typography variant="caption" component="div">
                        Price: ${front.cost}
                      </Typography>
                    </CardContent>
                  </ul>
                </CardActions>
              </div>
            </card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Five: Choose your pockets
        </Typography>
      </div>
      <div class="container">
        {pockets.map((pocket, index) => {
          return (
            <card sx={{ maxWidth: 250 }}>
              <div key={index}>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="pockets"
                      width="250"
                      image={pocket.imageOne}
                      pocketID={pocket.id}
                      onClick={(event) => {
                        var getPocketID = event.target.getAttribute("pocketID");
                        setChosenPocket(getPocketID);
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="overline"
                        fontWeight="regular"
                        component="div"
                        lineHeight="1"
                      >
                        {pocket.pocketName}
                      </Typography>
                      <Typography variant="caption" component="div">
                        Price: ${pocket.cost}
                      </Typography>
                    </CardContent>
                  </ul>
                </CardActions>
              </div>
            </card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Six: Choose your back
        </Typography>
      </div>
      <div class="container">
        {backs.map((back, index) => {
          return (
            <card sx={{ maxWidth: 250 }}>
              <div key={index}>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="back"
                      width="250"
                      image={back.imageOne}
                      backID={back.id}
                      onClick={(event) => {
                        var getBackID = event.target.getAttribute("backID");
                        setChosenBack(getBackID);
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="overline"
                        fontWeight="regular"
                        component="div"
                        lineHeight="1"
                      >
                        {back.backName}
                      </Typography>
                      <Typography variant="caption" component="div">
                        Price: ${back.cost}
                      </Typography>
                    </CardContent>
                  </ul>
                </CardActions>
              </div>
            </card>
          );
        })}
      </div>
    </div>
  );
};
export default Customisation;
