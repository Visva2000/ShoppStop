import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';





const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];



export default function Review(props) {
  const { pageKeyId } = props;
  const { checkoutItems = [] } = useSelector((state) => state.checkout)
  const { cartItems = [] } = useSelector((state) => state.cart)
  console.log(cartItems)
  const price = checkoutItems ? parseInt(checkoutItems.reduce((acc, i) => acc + i.price, 0)) : 0;
  const discountPrice = parseInt(price*0.1);
  const total =parseInt(price-discountPrice);


  const Cartprice = cartItems? parseInt(cartItems.reduce((acc,i)=>acc+i.price,0)):0;
  const cartDiscountPrice = parseInt(Cartprice*0.1);
  const cartTotal =parseInt(Cartprice-cartDiscountPrice);
// const dispatch = useDispatch();

console.log(checkoutItems)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      {/* ProductContainerPageData */}

      {pageKeyId === "2000" &&<List disablePadding>
        { checkoutItems && checkoutItems.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title}  />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }} >
        <ListItemText primary="Total Price" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {price}
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }} >
        <ListItemText primary="Discount" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {discountPrice}
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }} >
          <ListItemText primary="Final Amount" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {total}
          </Typography>
        </ListItem>
      </List>}

      {/* Data from cart page */}

      {pageKeyId === "2001" &&<List disablePadding>
        { cartItems && cartItems.map((products) => (
          <ListItem key={products.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={products.title}  />
            <Typography variant="body2">{products.price}</Typography>
          </ListItem>
        ))}
         <ListItem sx={{ py: 1, px: 0 }} >
        <ListItemText primary="Total Price" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {Cartprice}
          </Typography>
        </ListItem>

         <ListItem sx={{ py: 1, px: 0 }} >
        <ListItemText primary="Discount" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cartDiscountPrice}
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }} >
          <ListItemText primary="Final Amount" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cartTotal}
          </Typography>
        </ListItem>
      </List>}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}