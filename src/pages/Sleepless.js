import Typed from "react-typed";

import React from "react";



function Sleepless(){
    return (
        <>
            <div class="text-amber-600 ">
                <Typed
                    strings={['Welcome to:']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                    <img src={require('../img/MainLogo.jpg')} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                </div>
            </div>



        </>

    );
}

export default Sleepless;