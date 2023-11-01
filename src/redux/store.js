import { combineReducers, createStore } from 'redux'
import authReducers from './reducers/authReducers';
import { devToolsEnhancerDevelopmentOnly } from '@redux-devtools/extension';
import cartReducer from './reducers/cartReducers';
import checkoutReducer from './reducers/checkoutReducer';


const rootReducer = combineReducers({
    auth:authReducers,
    cart:cartReducer,
    checkout:checkoutReducer,
})

const store = createStore(rootReducer,devToolsEnhancerDevelopmentOnly());


export default store    