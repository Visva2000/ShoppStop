import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";


const CartSummary=()=>{

    const {cartItems=[]}=useSelector((state)=>state.cart);

    const totalCount = cartItems ? cartItems.length:0
    const price = cartItems? parseInt(cartItems.reduce((acc,i)=>acc+i.price,0)):0;
    const discountPrice = parseInt(price*0.1);
    const total =parseInt(price-discountPrice);
    return(
        <Box mt={4}>
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant="subtitle1" color={'gray'}>
                    Total items:
                </Typography>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                    {totalCount}
                </Typography>
            </Stack>
            <Stack mt={2} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant="subtitle1" color={'gray'}>
                    Price:
                </Typography>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                    {price} Rs
                </Typography>
            </Stack>

            <Stack mt={2} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant="subtitle1" color={'gray'}>
                    Discount:
                </Typography>
                <Typography color={"green"} variant="subtitle1" fontWeight={"bold"}>
                    {discountPrice} Rs
                </Typography>
            </Stack>

            
            <Stack mt={2} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant="subtitle1" color={'gray'}>
                    Delivery Price:
                </Typography>
                <Typography color={"green"} variant="subtitle1" fontWeight={"bold"}>
                    Free
                </Typography>
            </Stack>

            <Stack mt={2} py={2} sx={{borderTop:"1px dashed gray", borderBottom:"1px dashed gray"}} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant="subtitle1" color={'gray'}>
                    Total Amount:
                </Typography>
                <Typography  variant={"subtitle1"} fontWeight={"bold"}>
                    {total} Rs
                </Typography>
            </Stack>

            <Stack mt={2} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
               
                <Typography color={"green"} variant="subtitle1" fontWeight={"bold"}>
                    You saved {discountPrice} Rs on this order
                </Typography>
            </Stack>
           
        </Box>
    )
}

export default CartSummary