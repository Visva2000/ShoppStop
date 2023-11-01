
import * as LS from"../../Utils/localStorage"
import { authActionTypes } from "./actionTypes";

export const setLoggedinToken=(value)=>{
    LS.setLS("token",value);
    return{
        type:authActionTypes.SET_LOGGEDIN_TOKEN,
        payload: value,
    };

};
 
export const getIsLoggedin=()=>{
    return LS.getLS('token')    
}


export const logout=()=>{
    LS.clearLs();
    return{
        type:authActionTypes.LOGOUT,
        payload:null,
    };

};


