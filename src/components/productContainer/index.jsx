import { Box, Button, Chip, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductInfo } from "../../actions/productActions";
import ProductCardSkeleton from "../loaders/ProductCardSkeleton";
import StarIcon from '@mui/icons-material/Star';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";
import { addItemToCheckOut } from "../../redux/actions/checkoutActions";
const ProductContainer = () => {


    const [product, setProduct] = useState(null);
    const [apiStatus, setApiStatus] = useState('')
    const { id: productId } = useParams()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const { cartItems = [] } = useSelector((state) => state.cart)
    const { checkoutItems = [] } = useSelector((state) => state.checkout)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchProduct = async () => {

        setApiStatus('loading')
        try {
            const { data: productData } = await getProductInfo(productId);
            setProduct(productData)
            setApiStatus('success')
        } catch (e) {
            console.log(e)
            setApiStatus('error')
        }


    }

    useEffect(() => {
        fetchProduct()

    }, [])

    const isAlreadyInCheckout = checkoutItems.find((i) => i.id === +productId);
    const onAddToCart = () => {
        dispatch(addItemToCart(product));
      }

    const onGotoCart=()=>{
        navigate('/cart')
    }


    const keyId = 2000;

    const onCheckOut = ()=>{
        if(isLoggedIn && !isAlreadyInCheckout ){
            dispatch(addItemToCheckOut(product));  
        }
        navigate(`/checkout/${keyId}`)
        
    }

    const isLoading = apiStatus === 'loading';
    const isAlreadyInCart = cartItems.find((i) => i.id === +productId);
    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            {!isLoading && product && (<Stack direction={{ sm: 'column', md: 'row' }} gap={20} >
                <Box maxHeight={500} width={{
                    sm:'100%',
                    md:'50%',
                    
                }} 
                margin={'auto'}
                minWidth={200}  
                maxWidth={600}>
                    <img height={'100%'} width={'100%'} src={product.image} alt={product.title} />
                </Box>
                <Box >
                    <Typography color="black" gutterBottom variant={{ sm: 'h1', md: 'h1' }} component="h1">
                        {product.title}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Box
                        sx={{
                            my:4,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            name="text-feedback"
                            value={product.rating.rate}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Box sx={{ ml: 2 ,fontSize:18,fontWeight:'bold'}}>Total Reviews: {product.rating.count}</Box>
                    </Box>
                    <Typography mt={2} fontWeight={700} color="green" variant="h4">
                        Rs.{product.price}
                    </Typography>
                    <Chip sx={{mt:2}} label={product.category.toUpperCase()}  variant="filled"></Chip>
                    <Grid container={true} spacing={4} my={2}>
                        <Grid item>
                             <Button startIcon={<LocalMallIcon/>} size="large" variant="contained" onClick={onCheckOut}>Buy Now</Button>
                        </Grid><Grid item>
                        {!isAlreadyInCart && <Button startIcon={<ShoppingCartIcon/>} size="large" variant="outlined" disabled={!isLoggedIn} onClick={onAddToCart}>Add to Cart</Button>}
                        {isAlreadyInCart && <Button startIcon={<ShoppingCartIcon/>} size="large" variant="outlined" disabled={!isLoggedIn} onClick={onGotoCart} >Go to Cart</Button>}
                        </Grid>
                    </Grid>
                </Box>

            </Stack>)}
            {isLoading && <ProductCardSkeleton />}
        </Container>
    )
}
export default ProductContainer