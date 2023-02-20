import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";

import Map from "../../img/Coven/map.png"

function Monumap()
{
    return(
        <div>


            <Carousel infiniteLoop autoPlay>
                <div>
                    <img src={Map} alt="s"/>
                </div>
            </Carousel>

        </div>

    );
}

export default Monumap;