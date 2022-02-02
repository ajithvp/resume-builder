import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousels = (props) => {
    return (
        <Carousel>
            {props.getCarouselContent()}
        </Carousel>
    );
};

export default Carousels