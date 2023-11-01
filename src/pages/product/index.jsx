import React from "react";
import {Box} from "@mui/material"
import Header from "../../components/Header";
import ProductContainer from "../../components/productContainer";

const Product = ()=>{
    return(
        <div>
            <Header showLogin={true} showHome={true}/>
            <ProductContainer/>


        </div>
    )
}

export default Product