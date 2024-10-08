import React from "react";
import TableImg from "../../assets/website/tableImg.png"
import Vector from "../../assets/website/background.png"

const Hero = () => {
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    };
    return <>
        <div className="min-h-[550px] sm:min-h-[650px] bg-gray-300 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" style={bgImage}>
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content */}
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center">Kansas <span className="text-primary">Treding</span></h1>
                        <h1 className="text-center">"Bringing the world’s best medicines and medical equipments to your doorstep for a healthier tomorrow."</h1>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">ContactUs</button>
                        </div>
                    </div>
                    {/* image content */}
                    <div>
                        <img src={TableImg} alt="" className="w-[300px] sm:w-[450px] sm:scale-110 m-auto spin"/>
                    </div>
                </div>

            </div>
        </div>
    </>
};

export default Hero;
