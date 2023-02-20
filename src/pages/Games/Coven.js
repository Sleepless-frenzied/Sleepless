import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import Coven from "../../img/Coven/Coven.png"
import Boss from "../../img/Coven/Boss.png"
import Loading from "../../img/Coven/loading.png"
import Map from "../../img/Coven/map.png"
import Skill from "../../img/Coven/skills.jpg"
function App() {
    const slides = [
        {
            url: Coven,
            title:"An amazing RGP!",
            resume:"Made with love and care by Sleepless ^^",
        },
        {
            url: Boss,
            title:"Epic Boss fights!!!",
            resume:"DRAGOOOOONS!!!",
        },
        {
            url: Loading,
            title:"Fast loading time",
            resume:"GOTTA GO FAST!!!",
        },
        {
            url: Map,
            title:"Huge map",
            resume:"don't get lost ;)",
        },
        {
            url: Skill,
            title:"A lot of skills",
            resume:"Do whatever you want.",
        },



    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className=' m-auto max-w-screen-md  w-full py-16 px-4 relative group'>
            <div
                className='relative object-cover overflow-hidden rounded-md bg-center bg-cover duration-500'
            >
                <img  className="max-w-screen-md  h-[565px] w-full" src={slides[currentIndex].url} alt="tr">
                </img>
                <div className="carousel-caption hidden sm:block absolute text-center">

                    <div className="grid grid-cols-1 divide-y">
                        <h5 className="text-xl">{slides[currentIndex].title}</h5>
                        <p>{slides[currentIndex].resume}</p>
                    </div>

                </div>

            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>

        </div>

    );
}

export default App;