import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import logo from "../../img/logo/MainLogo.jpg"
import logo1 from "../../img/Coven/Boss.png"
import logo2 from "../../img/Coven/Coven.png"
function Loading() {
    const slides = [
        {
            url: logo,
        },
        {
            url: logo1,
        },
        {
            url: logo2,
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
                <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
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

export default Loading;