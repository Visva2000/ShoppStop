import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeFromCart } from '../../redux/actions/cartActions';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductCard = (props) => {
  const navigate = useNavigate()
  const { cartItems = [] } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const { info } = props || {};
  const { title, price, image, description, category, id } = info || {};

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
 console.log(isLoggedIn)
  const onClickProduct = () => {

    navigate(`/product/${id}`)
  }
  const onAddToCart = () => {
    dispatch(addItemToCart(info));
  }

  const onRemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }

  const isAlreadyInCart = cartItems.find((i) => i.id === id);
  return (
    <Card sx={{ maxWidth: 354, backgroundColor: 'white' }} >

      <CardActionArea onClick={onClickProduct}>

        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height={"240"}
          image={image}
          alt={title}

        />

        <CardContent >
          <Typography sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', textDecoration: 'none' }} color="black" gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', textDecoration: 'none' }} variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Chip sx={{ mt: 2 }} label={category.toUpperCase()} variant="filled"></Chip>
          <Typography sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', textDecoration: 'none' }} mt={2} fontWeight={700} color="green">
            Rs.{price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions >
        {!isAlreadyInCart && <Button size="small" color="primary" onClick={onAddToCart} disabled={!isLoggedIn} >
          Add to Cart
        </Button>}
        {isAlreadyInCart && <Button size="small" onClick={onRemoveFromCart} color="primary" variant="contained" disabled={!isLoggedIn} startIcon={<DeleteIcon />}>
          Remove
        </Button>}
      </CardActions>
    </Card>
  );
}

export default ProductCard
