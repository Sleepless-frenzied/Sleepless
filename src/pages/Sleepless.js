

import React from "react";
import Typewriter from 'typewriter-effect';


function Sleepless(){


    const Alone = 'It is dangerous to go alone!';

    const Take = 'Take this! Or die';//.replace(/.{1}/g, '$&<br/>');
    return (
        <div class="bg-idk text-white font-Gamer" >
            <br/>

            <div className="grid grid-cols-5 ">

                <div className="max-h-max" style={{textOrientation: "upright", writingMode: "vertical-lr"}}>
                    <Typewriter

                        options={{
                            strings: [Alone,],
                            autoStart: true,
                            loop: true,
                            delay:100,
                            cursor:'',
                            wrapperClassName:"sm:ml-20 lg:ml-44 min-[1600px]:ml-80 max-w-max max-h-max flex flex-wrap justify-end font-Sheikah absolute z-50 text-4xl sm:text-6xl text-b "

                        }}
                    />
                </div>





                <div className="flex flex-wrap justify-center col-span-3">

                    <div className="">
                        <img src={require("../img/logo/MainLogo.jpg")}
                             alt="..." className="scale-90 shadow rounded align-middle border-none"/>
                    </div>
                </div>



                <div className="max-h-max" style={{textOrientation: "upright", writingMode: "vertical-lr"}}>
                    <Typewriter

                        options={{
                            strings: [Take,],
                            autoStart: true,
                            loop: true,
                            delay:100,
                            cursor:'',
                            wrapperClassName:" max-w-max max-h-max flex flex-wrap justify-start font-Sheikah absolute z-50 text-4xl sm:text-6xl text-b "

                        }}
                    />
                </div>

            </div>






        </div>

    );
}

export default Sleepless;