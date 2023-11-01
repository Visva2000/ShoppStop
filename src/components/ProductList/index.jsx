import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../productCards";
import { getFilteredProducts, getProducts } from "../../actions/homeActions";
import ProductCardSkeleton from "../loaders/ProductCardSkeleton";
import noProductsPic from "../../assets/noProducts.svg";
import errorPic from "../../assets/error.svg";
import { useSearchParams } from "react-router-dom";

const ProductList = ()=>{
    const [products, setProducts] = useState(null);
    const[apiStatus,setApiStatus] = useState('');
    const[param] = useSearchParams();
    const category = param.get('category')
    const sortBy = param.get('sortBy')

    const fetchProducts = ()=>{
        setApiStatus("loading");
        let productsPromise = null;
        if(category){
            productsPromise= getFilteredProducts();
        }
        else{
            productsPromise= getProducts()
        }
    
    productsPromise.then(({data})=>{        
        // throw new Error();
        setProducts(data);
        setApiStatus("SUCCESS")     
    }).catch((err)=>{
        setApiStatus("ERROR")
    });
    }
    useEffect(()=>{
        fetchProducts();
       
    },[category,sortBy])
    const showLoader = apiStatus==="loading";
    const isEmptyArray = Array.isArray(products)&& !products.length;
    const noProducts =apiStatus==="SUCCESS"&&(!products||isEmptyArray)
    const error = apiStatus==="ERROR"
    return( 
        <Container >
            <Stack mt={4} mb={4} gap={4}  flexWrap={"wrap"} direction={"row"} >

            {Array.isArray(products)&& products.map((product)=>(<ProductCard key={product.id} info={product} />)) }
            
            {showLoader&&[0,0,0,0].map((_,index)=>(
                <ProductCardSkeleton key={index}/>
            ))}
            {noProducts&&(
                <Box sx={{margin:"0 auto",textAlign:"center"}}>
                    <img height={300} width={"100%"} src={noProductsPic}/>
                    <Typography variant="h5"component={"p"} color="grey">No Products Available</Typography>
                </Box>
            )}
              {error&&(
                <Box sx={{margin:"0 auto",textAlign:"center"}}>
                    <img height={300} width={"100%"} src={errorPic}/>
                    <Typography variant="h5"component={"p"} color="grey">something went wrong</Typography>
                </Box>  
            )}

            </Stack>
        </Container>
    )
}
export default ProductList