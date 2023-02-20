import Typed from "react-typed";

import React from "react";


function Sleepless(){
    return (
        <div class="bg-black text-white h-screen font-Gamer" >
            <Typed
                strings={['Welcome to:']}
                typeSpeed={40}
                backSpeed={50}
                loop
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