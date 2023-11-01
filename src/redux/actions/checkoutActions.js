import { checkoutActionTypes } from "./actionTypes"


export const addItemToCheckOut= (product)=>{
    return  {
        type: checkoutActionTypes.ADD_TO_CHECKOUT,
        product,
    }
}

export const removeFromCheckOut= (productId)=>{
    //console.log("removeFromCheckOut",productId)
    return  {
        type: checkoutActionTypes.REMOVE_FROM_CHECKOUT,
        productId,
    }
}
