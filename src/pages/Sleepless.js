

import React from "react";

import { TypeAnimation } from 'react-type-animation';


function Sleepless(){
    return (
        <div class="bg-black text-white h-screen font-Gamer" >


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
                style={{ fontSize: '2em' }}
            />


            <div className="flex flex-wrap justify-center">
                <div className="w-1/3 px-4">
                    <img src={require("../img/logo/MainLogo.jpg")}
                         alt="..." className="shadow rounded max-w-full h-auto align-middle border-none"/>
                </div>
            </div>
        </div>

    );
}

export default Sleepless;