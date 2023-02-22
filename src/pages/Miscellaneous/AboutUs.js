import React from "react";


function AboutUs()
{
    return(
        <div className="m-5 ">
            <div className="grid grid-rows-2 grid-cols-2 ">
                <img

                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />
                <div className="grid grid-rows-5 text-white flex justify-center items-center overflow-auto m-1">
                    <p className="row-start-2 row-end-3 text-5xl">
                        Who are we?
                    </p>
                    <p className="row-start-3 row-end-6 text-2xl">
                        We are group of developpers!<br/>We make mobile-apps, web-apps and GAMES!
                    </p>

                </div>
                <div className="grid grid-rows-5 text-white flex justify-center items-center overflow-auto m-1">
                    <p className="row-start-2 row-end-3 text-5xl">
                        But in reality...
                    </p>
                    <p className="row-start-3 row-end-6 text-2xl">
                        I'm the only constant member of these projects :')
                    </p>

                </div>
                <div className="flex justify-center items-center">
                    <img


                        src={require('../../img/misc/willy.somkhit.png')}
                        alt="Logo"

                    />
                </div>


            </div>
        </div>
    );
}

export default AboutUs;