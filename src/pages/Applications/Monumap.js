import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


import logo from "../../img/Monumap/logo.jpg"
import bnw from "../../img/Monumap/bnw.jpg"
import cat from "../../img/Monumap/cat.jpg"
import map from "../../img/Monumap/map.jpg"
import nvm from "../../img/Monumap/nvm.jpg"
import connections from "../../img/Monumap/Connecting.jpg"
import lead from "../../img/Monumap/leaderboard.jpg"



import "../../App.css"

const imageData = [
    {
        label: "Amazing app with incredible design! X)",
        alt: "logo",
        url:logo
    },
    {
        label: "Cool right? ;)",
        alt: "connections",
        url:connections
    },
    {
        label: "Made with care and love ^^ the cat can testify",
        alt: "cat",
        url:cat
    },
    {
        label: "Dark and light themes! (light themes is heresy tho 👀)",
        alt: "bnw",
        url:bnw
    },
    {
        label: "Map to not get lost and keep track of the monuments!",
        alt: "map",
        url:map
    },
    {
        label: "The competition is harsh!!! Be first or bite the dust!",
        alt: "lead",
        url:lead
    },
    {
        label: "GET RICK ROLLED!!! FOOL",
        alt: "nvm",
        url:nvm
    },

];

const renderSlides = imageData.map((image) => (
    <div key={image.alt} >
        <img src={image.url} alt={image.alt} />
        <p className="legend" >{image.label}</p>

    </div>
));


function Monumap() {
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    return (
        <div>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
            >
                {renderSlides}
            </Carousel>
        </div>
    );
}

export default Monumap;