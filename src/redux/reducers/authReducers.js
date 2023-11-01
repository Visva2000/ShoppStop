

import * as LS from"../../Utils/localStorage"
import { authActionTypes } from "../actions/actionTypes";
import { getIsLoggedin } from "../actions/authActions";

const initialState = {
    isLoggedIn: !!getIsLoggedin(),
    token:LS.getLS('token')    ,
    
};

//reducers take state and an action as parameters
//reducer returns updated state again

const authReducers= (state=initialState,action)=>{
    switch(action.type){
        case authActionTypes.SET_LOGGEDIN_TOKEN:{
            return{...state,isLoggedIn:true, token:action.payload}; 
        }

        case authActionTypes.LOGOUT:{
            return{...state,isLoggedIn:false, token:null}; 
        }

    }

    return{...state};

};

export default authReducers