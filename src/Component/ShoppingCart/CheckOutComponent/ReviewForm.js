import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const ReviewForm = (props) => {
  const shipmentDetails = props.shipmentDetails;
  const orders = props.orders;
  const totalCost = props.totalCost;
  const card = props.card;
  const cardNum = card.cardNumber;
  const cardFourNum = cardNum.substr(-4);

  return (
    <Box component="form" onSubmit={(e) => props.handleSubmitOrder(e)}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {orders.map((order, i) => {
          return (
            <ListItem key={i} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={order["fabric"].fabricName}
                secondary={`Qauntity: ${order.quantity}`}
              />
              <Typography variant="body2">{order.subtotal}</Typography>
            </ListItem>
          );
        })}

        <ListItem sx={{ py: 1, px: 0, m: 0}}>
          <ListItemText primary="Total Cost" />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {totalCost}
          </Typography>
        </ListItem>
      </List>
      <Divider></Divider>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 1, fontSize: "15px"}}>
            Shipping to:
          </Typography>
          <Typography gutterBottom sx={{fontSize: "12px"}}>{shipmentDetails.firstName}</Typography>
          <Typography gutterBottom sx={{fontSize: "12px"}}>{shipmentDetails.address1}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: -1, fontSize: "15px" }}>
            Payment details:
          </Typography>
          <Grid container>
            <div key={card.cardName}>
              <Grid item xs={12}>
                <Typography gutterBottom sx={{fontSize: "12px"}}>{card.cardName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom sx={{fontSize: "12px"}}>
                  Card last 4 digits: {cardFourNum}
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
      {/* <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' ,mt: 2}}> */}
      <Grid item container direction="row" xs={12} sm={6}>

      <Grid item xs={4}>
        <Button variant = "outlined" onClick={props.handleBack}>
          Back
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="contained" type="submit" sx={{backgroundColor: "green"}}>
          Submit
        </Button>
      </Grid>
      </Grid>
      {/* </Box> */}

        {/* <Grid align="right">
          <Button onClick={props.handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            type="submit"
            // onClick={() => {
            //   props.handleNext();
            // }}
          >
            Submit Order
          </Button>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default ReviewForm;
