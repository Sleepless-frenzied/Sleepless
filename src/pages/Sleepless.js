import Typed from "react-typed";

import React from "react";


function Sleepless(){
    return (
        <div >
            <Typed
                strings={['Welcome to:']}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
        </div>
    );
}

export default Sleepless;