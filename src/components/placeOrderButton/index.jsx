import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToCheckOut } from "../../redux/actions/checkoutActions";

const PlaceOrerBtn=()=>{
    const { checkoutItems = [] } = useSelector((state) => state.checkout)
    const[id]=checkoutItems
    const { cartItems = [] } = useSelector((state) => state.cart)
    const navigate = useNavigate();
    const keyId = 2001;

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isAlreadyInCheckout = checkoutItems.find((i) => i.id === +id);
    const dispatch = useDispatch();
    const onCheckOut = ()=>{
        if(isLoggedIn && !isAlreadyInCheckout ){
            dispatch(addItemToCheckOut({cartItems}));  
        }
        navigate(`/checkout/${keyId}`);

        
    }

    return(
        <Button size="large" sx={{width:"100%",p:2,fontWeight:"bold"}} color="warning" variant="contained" onClick={onCheckOut}>Place Order</Button>
    )
}
export default PlaceOrerBtn