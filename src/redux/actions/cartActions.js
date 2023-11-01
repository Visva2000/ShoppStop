import { cartActionTypes } from "./actionTypes"


export const addItemToCart= (product)=>{
    return  {
        type: cartActionTypes.ADD_TO_CART,
        product,
    }
}

export const removeFromCart= (productId)=>{
    return  {
        type: cartActionTypes.REMOVE_FROM_CART,
        productId,
    }
}


