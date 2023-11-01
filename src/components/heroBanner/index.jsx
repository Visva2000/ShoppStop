import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from "./Carousel1.png";
import Carousel2 from "./Carousel2.png";
import Carousel3 from "./Carousel3.png";
import { Box } from "@mui/material";

const Herobanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} maxHeight={600} height={{
            sm: '600px',
            md: '300px',
            lg: '600px'
        }} >
            <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={3000}>
                <Box height={{
                    sm: '600px',
                    md: '300px',
                    lg: '600px'
                }}>
                    <img height={"100%"} src={Carousel1} />

                </Box>
                <Box height={{
                    sm: '600px',
                    md: '300px',
                    lg: '600px'
                }}>
                    <img height={"100%"} src={Carousel2} />

                </Box>
                <Box height={{
                    sm: '600px',
                    md: '300px',
                    lg: '600px'
                }}>
                    <img height={"100%"} src={Carousel3} />

                </Box>
            </Carousel>

        </Box>


    )
}
export default Herobanner