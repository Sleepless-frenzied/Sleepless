import React from "react";
import {TypeAnimation} from "react-type-animation";

function Loading(){
    return(
        <>
            <div className="h-screen flex items-center justify-center text-white text-7xl">
                <TypeAnimation
                    sequence={[
                        'This page is currently under construction :)', // Types 'One'
                        5000,
                        '',
                        100// Waits 1s
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                />

            </div>
        </>
    )
}

export default Loading;