import React from "react";


function AboutUs()
{
    return(
        <div className=" flex flex-wrap justify-center ">
            <img

                src={require('../../img/logo/MainLogo.jpg')}
                alt="Logo"
                className="w-1/2"
            />
            <div className="text-white flex flex-col justify-between w-1/2">
                <p className=" text-5xl">
                    Who are we?
                </p>
                <p className=" text-2xl">
                    We are group of developpers!<br/>We make mobile-apps, web-apps and GAMES!
                </p>
            </div>


            <div className="text-white flex flex-col justify-between w-1/2">
                <p className=" text-5xl">
                    But in reality...
                </p>
                <p className=" text-2xl">
                    I'm the only constant member of these projects :')
                </p>
            </div>
            <img

                src={require('../../img/misc/willy.somkhit.png')}
                alt="Logo"
                className="scale-95 scale-y-90 w-1/2"
            />

        </div>
    );
}

export default AboutUs;