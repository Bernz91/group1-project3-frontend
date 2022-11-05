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
import { useNavigate } from "react-router";
import { Box } from "@mui/material";

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
    measurement: "",
  });

  let navigate = useNavigate();

  //auth0
  const { user, getAccessTokenSilently } = useAuth0();

  // const USER = "3bab595a-78a4-48f6-b093-eea8726a796e";

  //handleSendToWishList will contain the axios post
  const handleSendToWishList = async () => {
    try {
      const getAccessToken = await getAccessTokenSilently();
      await axios({
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
          measurementId: sendToWishlist.measurement.id,
        },
      });
      //if successful, action here
      alert("Successfully added to cart!");
    } catch (error) {
      //if fail, will go to here
      alert(
        "Please ensure all the selections have been made before adding to cart."
      );
    }
  };

  //   axios
  //     .post(`${BACKEND_URL}/users/${user.sub}/wishlists`)
  //     .then((res) => res.data)
  //     .then((res) => {
  //       console.log(res);
  //       setFabrics(res);
  //     });
  // };

  //measurement
  const [measurement, setMeasurement] = useState([]);
  useEffect(() => {
    if (user) {
      const getMeasurements = async () => {
        const getAccessToken = await getAccessTokenSilently();
        try {
          await axios
            .get(`${BACKEND_URL}/users/${user.sub}/measurements`, {
              headers: {
                Authorization: `Bearer ${getAccessToken}`,
              },
            })
            .then((res) => res.data)
            .then((res) => {
              console.log(res);
              setMeasurement(res);
            });
        } catch (err) {
          console.log(err);
        }
      };
      getMeasurements();
    }
  }, [user]);

  console.log(measurement);

  //fabrics
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

  //collars
  const [collars, setCollars] = useState([]);
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
    // style={{
    //   backgroundImage: `url("https://images.unsplash.com/photo-1603251579431-8041402bdeda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
    // }}
    >
      <Typography variant="h6">
        <div align="middle">
          <div>Customise your shirt</div>
        </div>
      </Typography>
      <Typography variant="caption">
        {/* <div>
          We are sending to wishlist {sendToWishlist?.fabric.fabricName},{" "}
          {sendToWishlist?.collar.collarName},{sendToWishlist?.cuff.cuffName},
          {sendToWishlist?.front.frontName},{sendToWishlist?.pocket.pocketName},
          {sendToWishlist?.back.backName},
          {sendToWishlist?.measurement.categoryByUser}.
        </div> */}
      </Typography>
      <br />
      <div className="steps">
        <Typography variant="Overline" color="black">
          Step One: Choose your size profile
        </Typography>
      </div>
      {measurement.length !== 0 ? (
        <div className="container">
          {measurement.map((measurement, index) => {
            return (
              <Card key={index} sx={{ maxWidth: 250 }}>
                <Box
                  bgcolor={
                    sendToWishlist.measurement.categoryByUser ===
                    measurement.categoryByUser
                      ? "blue"
                      : "transparent"
                  }
                >
                  <div>
                    <CardActions>
                      <ul className="measurementCard">
                        <CardContent
                          sx={{
                            m: -1,
                            // width: "150px",
                            // height: "180px",
                          }}
                          onClick={(event) => {
                            setSendToWishlist({
                              ...sendToWishlist,
                              measurement: measurement,
                            });
                            console.log(measurement);
                          }}
                        >
                          <Typography
                            variant="overline"
                            fontWeight="regular"
                            component="div"
                            lineHeight="2"
                          >
                            Category: {measurement.categoryByUser}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Collar: {measurement.collar}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Shoulders: {measurement.shoulders}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Chest: {measurement.chest}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Waist: {measurement.waist}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Sleeves Length: {measurement.sleevesLength}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Sleeves Width: {measurement.sleevesWidth}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Elbow: {measurement.elbow}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Left cuff: {measurement.leftCuff}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Right cuff: {measurement.rightCuff}
                            {measurement.measurementType}
                          </Typography>
                          <Typography variant="caption" component="div">
                            Shirt Length: {measurement.shirtLength}
                            {measurement.measurementType}
                          </Typography>
                        </CardContent>
                      </ul>
                    </CardActions>
                  </div>
                </Box>
              </Card>
            );
          })}
        </div>
      ) : (
        <Button
          variant="contained"
          onClick={() => navigate("/sizeprofile")}
          sx={{ m: 2 }}
        >
          Set up your size profile here
        </Button>
      )}
      <br />
      <div className="steps">
        <Typography variant="Overline" color="black">
          Step Two: Choose your fabric
        </Typography>
      </div>
      <div className="container">
        {fabrics.map((fabric, index) => {
          return (
            <Card
              key={index}
              sx={{ maxWidth: 180 }}
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box
                bgcolor={
                  sendToWishlist.fabric.id === fabric.id
                    ? "blue"
                    : "transparent"
                }
              >
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
                          sx={{
                            fontSize: "11px",
                            mt: -2,
                            textAlign: "center",
                          }}
                        >
                          {fabric.fabricName}
                        </Typography>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{ fontSize: "10px", textAlign: "center" }}
                        >
                          Price: ${fabric.cost}
                        </Typography>
                      </CardContent>
                    </ul>
                  </CardActions>
                </div>
              </Box>
            </Card>
          );
        })}
      </div>
      <div className="steps">
        <Typography variant="Overline" color="black">
          Step Three: Choose your collar
        </Typography>
      </div>
      <div className="container">
        {collars.map((collar, index) => {
          return (
            <Card
              key={index}
              sx={{ maxWidth: "130px" }}
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box
                bgcolor={
                  sendToWishlist.collar.id === collar.id
                    ? "blue"
                    : "transparent"
                }
              >
                <CardActions>
                  <ul className="InstaCardOther">
                    <CardMedia
                      component="img"
                      alt="collar"
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
                        sx={{ textAlign: "center" }}
                      >
                        {collar.collarName}
                      </Typography>
                      <Typography
                        variant="caption"
                        component="div"
                        sx={{ textAlign: "center" }}
                      >
                        Price: ${collar.cost}
                      </Typography>
                    </CardContent>
                  </ul>
                </CardActions>
              </Box>
            </Card>
          );
        })}
      </div>
      <div className="steps">
        <Typography variant="Overline" color="black">
          Step Four: Choose your cuff
        </Typography>
      </div>
      <div className="container">
        {cuffs.map((cuff, index) => {
          return (
            <Card
              key={index}
              sx={{ maxWidth: "130px" }}
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box
                bgcolor={
                  sendToWishlist.cuff.id === cuff.id ? "blue" : "transparent"
                }
              >
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
                          sx={{ textAlign: "center" }}
                        >
                          {cuff.cuffName}
                        </Typography>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{ textAlign: "center" }}
                        >
                          Price: ${cuff.cost}
                        </Typography>
                      </CardContent>
                    </ul>
                  </CardActions>
                </div>
              </Box>
            </Card>
          );
        })}
      </div>
      <div className="steps">
        <Typography variant="Overline" color="black">
          Step Five: Choose your fronts
        </Typography>
      </div>
      <div className="container">
        {fronts.map((front, index) => {
          return (
            <Card
              key={index}
              sx={{ maxWidth: "130px" }}
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box
                bgcolor={
                  sendToWishlist.front.id === front.id ? "blue" : "transparent"
                }
              >
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
                          sx={{ textAlign: "center" }}
                        >
                          {front.frontName}
                        </Typography>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{ textAlign: "center" }}
                        >
                          Price: ${front.cost}
                        </Typography>
                      </CardContent>
                    </ul>
                  </CardActions>
                </div>
              </Box>
            </Card>
          );
        })}
      </div>
      <div className="steps">
        <Typography variant="Overline" color="black">
          Step Six: Choose your pockets
        </Typography>
      </div>
      <div className="container">
        {pockets.map((pocket, index) => {
          return (
            <Card
              key={index}
              sx={{ maxWidth: "130px" }}
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box
                bgcolor={
                  sendToWishlist.pocket.id === pocket.id
                    ? "blue"
                    : "transparent"
                }
              >
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
                          sx={{ fontSize: "12px", mt: -2, textAlign: "center" }}
                        >
                          {pocket.pocketName}
                        </Typography>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{ textAlign: "center" }}
                        >
                          Price: ${pocket.cost}
                        </Typography>
                      </CardContent>
                    </ul>
                  </CardActions>
                </div>
              </Box>
            </Card>
          );
        })}
      </div>
      <div className="steps">
        <Typography variant="Overline" color="black">
          Step Seven: Choose your back
        </Typography>
      </div>
      <div className="container">
        {backs.map((back, index) => {
          return (
            <Card
              key={index}
              sx={{ maxWidth: "130px" }}
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box
                bgcolor={
                  sendToWishlist.back.id === back.id ? "blue" : "transparent"
                }
              >
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
                          sx={{ textAlign: "center" }}
                        >
                          {back.backName}
                        </Typography>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{ textAlign: "center" }}
                        >
                          Price: ${back.cost}
                        </Typography>
                      </CardContent>
                    </ul>
                  </CardActions>
                </div>
              </Box>
            </Card>
          );
        })}
      </div>
      <div align="middle">
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
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
export default Customisation;
