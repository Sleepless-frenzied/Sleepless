

import React from "react";

import { TypeAnimation } from 'react-type-animation';


function Sleepless(){
    return (
        <div class="bg-idk text-white font-Gamer" >
            <br/>


            <TypeAnimation
                sequence={[
                    'Welcome to:', // Types 'One'
                    5000,
                    '',
                    100// Waits 1s
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ }}
                className="text-6xl"
            />


            <div className="flex flex-wrap justify-center">
                <div className="h-4/5">
                    <img src={require("../img/logo/MainLogo.jpg")}
                         alt="..." className="shadow rounded  align-middle border-none"/>
                </div>
            </div>
        </div>

    );
}

export default Sleepless;