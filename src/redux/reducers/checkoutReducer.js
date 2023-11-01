import { checkoutActionTypes } from "../actions/actionTypes"

const initialState = {
    checkoutItems: []
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case checkoutActionTypes.ADD_TO_CHECKOUT:
            return { ...state, checkoutItems: [...state.checkoutItems, action.product] }
        case checkoutActionTypes.REMOVE_FROM_CHECKOUT: {
            const newItems = state.checkoutItems.filter((i) => i.id !== action.productId)
            return { ...state, checkoutItems: newItems }
        }
    }
    return { ...state }

}

export default checkoutReducer