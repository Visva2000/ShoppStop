import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import emptyCart from "../../assets/emptyCart.svg";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate } from "react-router-dom";
const EmptyCart=()=>{

    const navigate = useNavigate();
    const returnToProduct=()=>{
        navigate('/')
        
        
      }
     return(
        <Container maxWidth='sm'>
            <Box textAlign={'center'} m={8}>
                <img height={400} width={"100%"} src={emptyCart} alt="Not Found"/>
                <Typography component={"h2"} variant="h5" mt={2} mb={1}>
                   Cart is Empty
                </Typography>

                <Button onClick={returnToProduct} sx={{ mt: 0, ml: 1 }}  endIcon={<KeyboardReturnIcon/>}>
                    Continue Shopping
                  </Button>

            </Box>
        </Container>
     )
}

export default EmptyCart