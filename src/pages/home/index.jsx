import React from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Herobanner from "../../components/heroBanner";
import ProductList from "../../components/ProductList";
// import PrimarySearchAppBar from "../../components/Header/header";



const Home = ()=>{

    return(
        <div >
          <Header showLogin={true} showHome={false}/>
          {/* <PrimarySearchAppBar showLogin={true} showHome={false}/> */}
           <Herobanner/>
           <Filters/>
                  
           <ProductList/>
           
        </div>

    )
}

export default Home