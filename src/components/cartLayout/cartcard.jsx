import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = (props) => {
    const { item, setToast } = props;
    const { image, title, price, id } = item || {};
    const [count, setCount] = useState(1);

    const dispatch = useDispatch();
    const onRemoveFromCart = () => {
        setToast({
            message: "An item was removed",
            type: 'info'
        })
        dispatch(removeFromCart(id))
    }

    const onAddquantity = () => {
        if (count <= 4) {
            setCount((prevCount) => prevCount + 1)
        }
        else {

        }
    }
    const onMinusquantity = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1)
        }
    }


    return (
        <Box p={{ md: 2, xs: 0 }} border={1} borderRadius={2} borderColor="gray"    >

            <Stack gap={2} flexDirection={{ md: "row", xs: 'column' }}>

                <Box height={200} width={150} m={{ md: 0, xs: 'auto' }} >
                    <img height={"100%"} width={"100%"} src={image} alt={title} />
                </Box>

                <Stack alignItems={{ md: "flex-start", xs: "flex-start " }} width={"100%"}>
                    <Typography variant={{md:"subtitle2",xs:"subtitle2"}} fontWeight={"bold"} >{title}</Typography>
                    <Typography my={2} color="green" fontWeight={700} variant="h6">Rs. {price}</Typography>
                    <Stack mt={"auto"} gap={{ md: 4, xs: 0.5 }} flexDirection={{ md: "row", xs: "row" }} justifyContent={"space-between"} alignItems={"center"}>
                        <Stack gap={0} flexDirection={"row"} alignItems={"center"}>
                            <IconButton disabled={count <= 1} size="small" onClick={onMinusquantity}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <Typography fontWeight={'bold'} border={1} px={2}>{count}</Typography>
                            <IconButton disabled={count >= 4} size="small" onClick={onAddquantity}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </Stack>

                    </Stack>
                </Stack>
                <Stack mb={{ md: 0, xs: 0 }}sx={{backgroundColor:"lightgray",height:"20%"}} borderRadius={{md:1,sx:0}} >
                    <IconButton size="small" onClick={onRemoveFromCart} color="warning" variant="contained"><DeleteIcon /></IconButton>
                </Stack>
            </Stack>

        </Box>
    );
};

export default CartItem