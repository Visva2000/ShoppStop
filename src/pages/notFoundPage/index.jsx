import { Box, Container, Typography } from "@mui/material";
import React from "react";
import notFound from "../../assets/not_found.svg";
import { Link } from "react-router-dom";

const NotFound=()=>{
     return(
        <Container maxWidth='sm'>
            <Box textAlign={'center'} m={8}>
                <img height={400} width={"100%"} src={notFound} alt="Not Found"/>
                <Typography component={"h2"} variant="h5" mt={2} mb={4}>
                    404 Page Not Found
                </Typography>

                <Link to={"/"}>
                    <Typography component={'p'} variant="button">
                    Back to Home

                    </Typography>
                  
                </Link>

            </Box>
        </Container>
     )
}

export default NotFound