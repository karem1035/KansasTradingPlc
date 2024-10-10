import React from "react";
import missionImg from "../../assets/website/mission.png"
import visionImg from "../../assets/website/vision.png"
import qualityImg from "../../assets/website/quality.png"


const OurStatment = [
    {
        id: 1,
        img: missionImg,
        name: "Mission",
        description: 
        "At Kansas Treding, our mission is to be a catalyst for positive change in healthcare by delivering a diverse range of pharmaceutical products and medical devices. We aim to enhance the well-being of individuals through reliable, innovative, and accessible healthcare solutions.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: visionImg,
        name: "Vision",
        description: "Our vision is to transform the healthcare landscape by fostering innovations in medical technology and pharmaceutical access, contributing to healthier communities and improving the quality of life for all.To be the leading and most trusted importer of pharmaceutical products and medical devices in Ethiopia, ensuring that every healthcare facility, regardless of location, has access to the essential tools and medicines needed to save lives.",
        aosDelay: "300",
    },
    {
        id: 3,
        img: qualityImg,
        name: "Quality Assurance",
        description: "We prioritize the importation of pharmaceuticals and medicaldevices that meet stringent quality standards, ensuring efficacy and safety",
        aosDelay: "500",
    }
]
const Values = () => {
    return <>
        <div className="dark:bg-black">
            <div className="container w-full mb-10">
                <div className="shadow-lg text-center dark:bg-gray-900 dark:text-white duration-200">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-full font-bold dark:text-white">Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Statments</span></h1>
                </div>
                {/* the statement cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 place-items-center">
                    {OurStatment.map(({ id, img, name, description, aosDelay}) => {
                        return (
                            <div key={id} data-aos="fede-up" data-aos-delay={aosDelay} className="group mt-20 rounded-2xl bg-white dark:bg-gray-900 hover:!bg-primary shadow-xl duration-200 max-w-[300px] relative">
                                {/* image section */}
                                <div className="h-[30px] mt-20">
                                    <img src={img} alt="" className="max-w-[100px] block mx-auto transform -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300"/>
                                </div>
                                {/* text content section */}
                                <div className="text-center dark:text-white">
                                    <h1 className="text-xl font-bold">{name}</h1>
                                    <p className="text-gray-500 dark:text-white group-hover:text-black duration-300">{description}</p>
                                </div>
                            </div>
                        )})}
                </div>
            </div>
        </div>
    </>
}

export default Values;
