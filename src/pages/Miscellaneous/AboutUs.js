import React from "react";

function AboutUs()
{
    return(
        <>
            <div className="grid grid-rows-2 grid-cols-2">
                <img

                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />
                <img

                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />
                <img

                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />
                <img

                    src={require('../../img/logo/MainLogo.jpg')}
                    alt="Logo"
                />

            </div>
        </>
    );
}

export default AboutUs;