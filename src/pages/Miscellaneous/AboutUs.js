import React from "react";

function AboutUs()
{
    return(
        <>
            <div className="grid-rows-2 gap-5 ">
                <img
                    className="h-1/3 w-1/3"
                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />
                <img
                    className="h-1/3 w-1/3"
                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />
                <img
                    className="h-1/3 w-1/3"
                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />
                <img
                    className="h-1/3 w-1/3"
                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />

            </div>
        </>
    );
}

export default AboutUs;