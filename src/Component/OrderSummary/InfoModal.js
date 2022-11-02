import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
// import EditShirtDesign from "../EditShirtDesign/EditShirtDesign";

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

const InfoModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const item = props.item;
  console.log(item);

  return (
    <div>
      <Button
        variant="outlined"
        align="center"
        sx={{ m: 0 }}
        onClick={handleOpen}
        sx={{ width: "200", p: 1, m: 1, ml: 0, textTransform: "none" }}
      >
        <Typography sx={{ fontSize: "11px" }}>View Shirt Design </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Your Shirt Design:
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, lineHeight: 1.6, fontFamily: "Monospace" }}
            variant="overline"
          >
            <Grid container spacing={2}>
              <Grid item container direction="row" xs={12} sm={6}>
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    sx={{ m: 0, p: 0, height: "10vh", width: "10vw" }}
                    image={item["fabric"].imageOne}
                    alt={item["fabric"].description}
                  />
                </Grid>
                <Grid item xs={10} justify="center">
                  <Box>Fabric type: {item["fabric"].fabricName}</Box>
                </Grid>
              </Grid>
              <Grid item container direction="row" xs={12} sm={6}>
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    sx={{ m: 0, p: 0, height: "10vh", width: "10vw" }}
                    image={item["collar"].imageOne}
                    alt={item["collar"].description}
                  />
                </Grid>
                <Grid item xs={10} justify="center">
                  <Box>Collar type: {item["collar"].collarName}</Box>
                </Grid>
              </Grid>
              <Grid item container direction="row" xs={12} sm={6}>
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    sx={{ m: 0, p: 0, height: "10vh", width: "10vw" }}
                    image={item["front"].imageOne}
                    alt={item["front"].description}
                  />
                </Grid>
                <Grid item xs={10} justify="center">
                  <Box>Front type: {item["front"].frontName}</Box>
                </Grid>
              </Grid>
              <Grid item container direction="row" xs={12} sm={6}>
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    sx={{ m: 0, p: 0, height: "10vh", width: "10vw" }}
                    image={item["back"].imageOne}
                    alt={item["back"].description}
                  />
                </Grid>
                <Grid item xs={10} justify="center">
                  <Box>Back type: {item["back"].backName}</Box>
                </Grid>
              </Grid>
              <Grid item container direction="row" xs={12} sm={6}>
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    sx={{ m: 0, p: 0, height: "10vh", width: "10vw" }}
                    image={item["cuff"].imageOne}
                    alt={item["cuff"].description}
                  />
                </Grid>
                <Grid item xs={10} justify="center">
                  <Box>Cuff type: {item["cuff"].cuffName}</Box>
                </Grid>
              </Grid>
              <Grid item container direction="row" xs={12} sm={6}>
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    sx={{ m: 0, p: 0, height: "10vh", width: "10vw" }}
                    image={item["pocket"].imageOne}
                    alt={item["pocket"].description}
                  />
                </Grid>
                <Grid item xs={10} justify="center">
                  <Box>Pocket type: {item["pocket"].pocketName}</Box>
                </Grid>
              </Grid>

              {/* <EditShirtDesign item={item}/> */}

              {/* <Grid> */}
              {/* <Button  variant="contained" fullWidth
                  sx={{ align: "center", display: "flex", mt: 2, ml: 2}}>
                Edit design
              </Button> */}
              {/* </Grid> */}
            </Grid>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default InfoModal;
