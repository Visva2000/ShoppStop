import React, { useState } from "react";
import Header from "../../components/Header";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import CartLayout from "../../components/cartLayout";
import CartItem from "../../components/cartLayout/cartcard";
import { useSelector } from "react-redux";
import Toast from "../../components/toast";
import CartSummary from "../../components/cartLayout/cartSummary";
import PlaceOrerBtn from "../../components/placeOrderButton";
import EmptyCart from "../emptyCartPage";

const Cart = () => {

    const { cartItems = [] } = useSelector((state) => state.cart)
    const [toast, setToast] = useState(null);
    const onCloseToast = () => {
        setToast(null);
    }
    console.log("Cart Page",cartItems)
    return (
        <div style={{ background: "#f1f3f6", minHeight: "100vh" }}>
            <Header showCart={false} />
            {cartItems.length == 0 &&<EmptyCart/>}
            {cartItems.length !== 0 && <CartLayout >
                <Grid flexDirection={{ lg: 'row', xs: 'column' }} gap={4} container>
                    <Grid item lg={7} >
                        <Card sx={{ p: 2, m:'auto' }} >
                            <Typography variant="h5" component={'h1'} color="burlywood">Cart Items</Typography>
                            <Stack gap={4} mt={4}  m={{ md: 2, xs: 'auto' }}>
                                {
                                     cartItems.length !== 0 && cartItems.map((item) => (
                                        <CartItem setToast={setToast} item={item} key={item.id} />
                                    ))
                                }
                            </Stack>
                        </Card>
                    </Grid>
                    {cartItems.length !== 0 && <Grid item lg={4}>
                        <Card sx={{ p: 4 }}>
                            <Typography variant="h5" component={'h1'} color="gray">Cart Summary</Typography>
                            <CartSummary />
                        </Card>
                        <Box mt={4}>
                                <PlaceOrerBtn />
                        </Box>
                    </Grid>}
                </Grid>
            </CartLayout>}
            {toast && (<Toast message={toast.message}
                open={toast}
                type={"info"}
                onClose={onCloseToast} />)}
        </div>
    )
}

export default Cart