import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../CSS/Fabrics.css";
import { useAuth0 } from "@auth0/auth0-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Customisation = () => {
  //sendToWishList
  const [sendToWishlist, setSendToWishlist] = useState({
    fabric: "",
    collar: "",
    cuff: "",
    front: "",
    pocket: "",
    back: "",
  });

  //auth0
  const { user, getAccessTokenSilently } = useAuth0();
  console.log(user);

  //handleSendToWishList will contain the axios post
  const handleSendToWishList = () => {
    const getAccessToken = getAccessTokenSilently();
    axios({
      method: "post",
      url: `${BACKEND_URL}/wishlists`,
      headers: {
        Authorization: `Bearer ${getAccessToken}`,
      },
      data: {
        userId: user.sub,
        fabricId: sendToWishlist.fabric.id,
        collarId: sendToWishlist.collar.id,
        cuffId: sendToWishlist.cuff.id,
        frontId: sendToWishlist.front.id,
        pocketId: sendToWishlist.pocket.id,
        backId: sendToWishlist.back.id,
      },
    });
  };

  //   axios
  //     .post(`${BACKEND_URL}/users/${user.sub}/wishlists`)
  //     .then((res) => res.data)
  //     .then((res) => {
  //       console.log(res);
  //       setFabrics(res);
  //     });
  // };

  //fabrics
  const [fabrics, setFabrics] = useState([]);
  // const [chosenFabric, setChosenFabric] = useState([]);

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
  // const [chosenCollar, setChosenCollar] = useState([]);

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
  // const [chosenCuff, setChosenCuff] = useState([]);

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
  // const [chosenFront, setChosenFront] = useState([]);

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
  // const [chosenPocket, setChosenPocket] = useState([]);

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
  // const [chosenBack, setChosenBack] = useState([]);

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
          We are sending to wishlist {sendToWishlist?.fabric.fabricName},{" "}
          {sendToWishlist?.collar.collarName},{sendToWishlist?.cuff.cuffName},
          {sendToWishlist?.front.frontName},{sendToWishlist?.pocket.pocketName},
          {sendToWishlist?.back.backName}.
        </div>

        <Button
          variant="contained"
          sx={{
            width: 190,
            fontSize: "10px",
          }}
          onClick={(event) => {
            handleSendToWishList();
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
      <div className="container">
        {fabrics.map((fabric, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 250 }}>
              <div>
                <CardActions>
                  <ul className="InstaCard">
                    <CardMedia
                      component="img"
                      alt="shirt"
                      width="250"
                      image={fabric.imageOne}
                      onClick={(event) => {
                        setSendToWishlist({
                          ...sendToWishlist,
                          fabric: fabric,
                        });
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
            </Card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Two: Choose your collar
        </Typography>
      </div>
      <div className="container">
        {collars.map((collar, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 250 }}>
              <div>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="collar"
                      width="250"
                      image={collar.imageOne}
                      onClick={(event) => {
                        setSendToWishlist({
                          ...sendToWishlist,
                          collar: collar,
                        });
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
            </Card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Three: Choose your cuff
        </Typography>
      </div>
      <div className="container">
        {cuffs.map((cuff, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 250 }}>
              <div>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="cuff"
                      width="250"
                      image={cuff.imageOne}
                      onClick={() => {
                        setSendToWishlist({
                          ...sendToWishlist,
                          cuff: cuff,
                        });
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
            </Card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Four: Choose your fronts
        </Typography>
      </div>
      <div className="container">
        {fronts.map((front, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 250 }}>
              <div>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="fronts"
                      width="250"
                      image={front.imageOne}
                      onClick={(event) => {
                        setSendToWishlist({
                          ...sendToWishlist,
                          front: front,
                        });
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
            </Card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Five: Choose your pockets
        </Typography>
      </div>
      <div className="container">
        {pockets.map((pocket, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 250 }}>
              <div>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="pockets"
                      width="250"
                      image={pocket.imageOne}
                      onClick={(event) => {
                        setSendToWishlist({
                          ...sendToWishlist,
                          pocket: pocket,
                        });
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
            </Card>
          );
        })}
      </div>
      <div>
        <Typography variant="Overline" color="black">
          Step Six: Choose your back
        </Typography>
      </div>
      <div className="container">
        {backs.map((back, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 250 }}>
              <div>
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="back"
                      width="250"
                      image={back.imageOne}
                      onClick={(event) => {
                        setSendToWishlist({
                          ...sendToWishlist,
                          back: back,
                        });
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
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Customisation;
