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
      <Typography variant="h3">
        <div>Customise your shirt</div>
      </Typography>
      <Typography variant="h5">
        <div>
          You have chosen fabric {chosenFabric}, collar {chosenCollar}, cuff
          {chosenCuff}, front {chosenFront}, pocket {chosenPocket}, back{" "}
          {chosenBack}.
        </div>
      </Typography>
      <Typography variant="h4" color="white">
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
                  <Typography variant="h5" fontWeight="bold" component="div">
                    {fabric.fabricName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${fabric.cost} Fabric ID: {fabric.id}
                  </Typography>
                  <Typography variant="body2" fontFamily="default">
                    {fabric.description}
                  </Typography>
                  <Typography>
                    <CardActions>
                      <Button
                        variant="contained"
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
      <Typography variant="h4" color="white">
        <div>Step Two: Collars</div>
      </Typography>
      {collars.map((collar, index) => {
        return (
          <card sx={{ maxWidth: 250 }}>
            <div key={index}>
              <ul className="InstaCard">
                <CardMedia
                  component="img"
                  alt="collar"
                  width="250"
                  image={collar.imageOne}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" component="div">
                    {collar.collarName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${collar.cost} Collar ID: {collar.id}
                  </Typography>
                  <Typography variant="body2" fontFamily="default">
                    {collar.description}
                  </Typography>
                  <Typography>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        collarID={collar.id}
                        onClick={(event) => {
                          var getCollarID =
                            event.target.getAttribute("collarID");
                          setChosenCollar(getCollarID);
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
      <Typography variant="h4" color="white">
        <div>Step Three: Cuffs</div>
      </Typography>
      {cuffs.map((cuff, index) => {
        return (
          <card sx={{ maxWidth: 250 }}>
            <div key={index}>
              <ul className="InstaCard">
                <CardMedia
                  component="img"
                  alt="cuff"
                  width="250"
                  image={cuff.imageOne}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" component="div">
                    {cuff.cuffName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${cuff.cost} Cuff ID: {cuff.id}
                  </Typography>
                  <Typography variant="body2" fontFamily="default">
                    {cuff.description}
                  </Typography>
                  <Typography>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        collarID={cuff.id}
                        onClick={(event) => {
                          var getCuffID = event.target.getAttribute("cuffID");
                          setChosenCuff(getCuffID);
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
      <Typography variant="h4" color="white">
        <div>Step Four: Fronts</div>
      </Typography>
      {fronts.map((front, index) => {
        return (
          <card sx={{ maxWidth: 250 }}>
            <div key={index}>
              <ul className="InstaCard">
                <CardMedia
                  component="img"
                  alt="front"
                  width="250"
                  image={front.imageOne}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" component="div">
                    {front.frontName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${front.cost} Front ID: {front.id}
                  </Typography>
                  <Typography variant="body2" fontFamily="default">
                    {front.description}
                  </Typography>
                  <Typography>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        frontID={front.id}
                        onClick={(event) => {
                          var getFrontID = event.target.getAttribute("frontID");
                          setChosenFront(getFrontID);
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
      <Typography variant="h4" color="white">
        <div>Step Five: Pockets</div>
      </Typography>
      {pockets.map((pocket, index) => {
        return (
          <card sx={{ maxWidth: 250 }}>
            <div key={index}>
              <ul className="InstaCard">
                <CardMedia
                  component="img"
                  alt="pocket"
                  width="250"
                  image={pocket.imageOne}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" component="div">
                    {pocket.pocketName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${pocket.cost} Pocket ID: {pocket.id}
                  </Typography>
                  <Typography variant="body2" fontFamily="default">
                    {pocket.description}
                  </Typography>
                  <Typography>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        pocketID={pocket.id}
                        onClick={(event) => {
                          var getPocketID =
                            event.target.getAttribute("pocketID");
                          setChosenPocket(getPocketID);
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
      <Typography variant="h4" color="white">
        <div>Step Six: Backs</div>
      </Typography>
      {backs.map((back, index) => {
        return (
          <card sx={{ maxWidth: 250 }}>
            <div key={index}>
              <ul className="InstaCard">
                <CardMedia
                  component="img"
                  alt="back"
                  width="250"
                  image={back.imageOne}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" component="div">
                    {back.backName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${back.cost} Back ID: {back.id}
                  </Typography>
                  <Typography variant="body2" fontFamily="default">
                    {back.description}
                  </Typography>
                  <Typography>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        backID={back.id}
                        onClick={(event) => {
                          var getBackID = event.target.getAttribute("backID");
                          setChosenBack(getBackID);
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
