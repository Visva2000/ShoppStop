import React from "react";
import SortBy from "../SortBy";
import Categories from "../Categories";
import { Box, Divider } from "@mui/material";




const Filters = () => {

    return (
        <Box m={2}  > 
            {/* <Typography variant="subtitle1" fontSize={20} color={"gray"} component={"p"}>
                Filters
            </Typography> */}
             <Divider/>
            <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'flex' } }} justifyContent={"space-between"} alignItems={"center"} mt={2} >
                <div className="store-categories">

                    <Categories />

                </div>
                <div  className="store-filter">

                    <SortBy />

                </div>
            </Box>
            <Divider/>
        </Box>
        

    );
};
export default Filters