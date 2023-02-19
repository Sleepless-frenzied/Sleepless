import Typed from "react-typed";

import React from "react";


function Sleepless(){
    return (
        <>
            <div class="bg-black text-amber-600 ">
                <Typed
                    strings={['Welcome to:']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </div>

            <div>
                <h2 class="text-amber-600">f</h2>
            </div>


        </>

    );
}

export default Sleepless;