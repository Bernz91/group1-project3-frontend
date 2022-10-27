import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ReviewForm = (props) => {
  const shipmentDetails = props.shipmentDetails;
  const orders = props.orders;
  const total = props.total;
  const card = props.card;
  const cardNum = card.cardNumber;
  const cardFourNum = cardNum.substr(-4);

  console.log(orders);

  return (
    <Box component="form" onSubmit={() => props.handleSubmitOrder()}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {orders.map((order, i) => {
          return (
            <ListItem key={i} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={order["fabric"].fabricName} secondary={order.quantity} />
              <Typography variant="body2">{order.subtotal}</Typography>
            </ListItem>
          );
        })}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping to:
          </Typography>
          <Typography gutterBottom>{shipmentDetails.firstName}</Typography>
          <Typography gutterBottom>{shipmentDetails.address1}</Typography>
          <Typography gutterBottom>{shipmentDetails.address2}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details:
          </Typography>
          <Grid container>
            <div key={card.cardName}>
              <Grid item xs={12}>
                <Typography gutterBottom>{card.cardName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>
                  Card ending with: {cardFourNum}
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid align="right">
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewForm;
