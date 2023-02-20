import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


import Coven from "../../img/Coven/Coven.png"
import Boss from "../../img/Coven/Boss.png"
import Loading from "../../img/Coven/loading.png"
import Map from "../../img/Coven/map.png"
import Skill from "../../img/Coven/skills.jpg"
import Shop from "../../img/Coven/Shop.png"
import Installer from "../../img/Coven/installer.jpg"

import "../../App.css"

const imageData = [
    {
        label: "Coven! An amazing RPG! | Made with ❤ and care by Sleepless ^^",
        alt: "An amazing RGP!",
        url:
        Coven
    },
    {
        label: "Epic Boss fights!!! | DRAGOOOOONS!!!",
        alt: "Epic Boss fights!!!",
        url:
        Boss
    },
    {
        label: "Fast loading time   | GOTTA GO FAST!!!",
        alt: "Fast loading time",
        url:
        Loading
    },
    {
        label: "Huge map    | don't get lost ;)",
        alt: "Huge map",
        url:
        Map
    },
    {
        label: "A lot of skills | Do whatever you want.",
        alt: "A lot of skills",
        url:
        Skill
    },
    {
        label: "Shop    | Come waste your money ;)",
        alt: "Shop",
        url:
        Shop
    },
    {
        label: "Easy way to download the game thanmks to the installer :))))",
        alt: "Installer",
        url:
        Installer
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