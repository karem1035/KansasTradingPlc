import React from "react";
import HandPng from "../../assets/website/aboutImg.jpeg"
import medHand from "../../assets/website/aboutUsHand.png"

const AboutUs = () => {
    return <>
        <div className="py-10 sm:min-h-[600px] sm:grid sm:place-items-center dark:bg-gray-950 dark:text-white duration-200">
            <div className="container w-full">
                {/* Header Section */}
                <div className="shadow-lg text-center dark:bg-gray-900 dark:text-white duration-200">
                    <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl max-w-full font-bold dark:text-white">About Us</h1>
                </div>
                {/* card section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center mt-20 mx-auto max-w-6xl px-4">
                    <div className="flex-col shadow-lg h-full p-6 bg-white rounded-lg flex items-center hover:shadow-xl transition-shadow duration-300 ease-in-out dark:bg-gray-900 dark:text-white duration-200">
                        <img src={medHand} alt="" className="w-20"/>
                        <p className="text-gray-700 text-lg text-center dark:text-white">
                            Established in 2024, Kansas trading is a pharmaceutical importing company based in Ethiopa.
                            Dedicated to improving healthcare accessibility, we specialize in the distribution of high-quality
                            medices and cutting-edge medical devices. Ensuring availability is our main concern, and our commitment
                             is rooted in advancing healthcare solutions to benefit communities across Ethiopia and beyond. 
                        </p>
                    </div>
                    <div className="shadow-lg h-full p-6 bg-white rounded-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 ease-in-out dark:bg-gray-900 dark:text-white duration-200">
                        <img src={HandPng} alt="" className="w-full h-auto object-contain rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AboutUs;
