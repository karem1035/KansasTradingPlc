import React from "react";
import SkincareImg from "../../assets/website/skincare.jpeg";
import MedicineImg from "../../assets/website/medicine and supliment.jpeg";
import medicalImg from "../../assets/website/medical equipmet.jpeg";

const productData = [
    {
        title: "Medicine and Supliments",
        image: MedicineImg,
    },
    {
        title: "Medical and Safty Equipments",
        image: medicalImg,
    },
    {
        title: "Skin care and Wellness Products",
        image: SkincareImg,

    },
]

const Blogs = () => {
    return <>
        <div className="dark:bg-black">
            <div className="container w-full">
                <div className="mb-20 shadow-lg text-center dark:bg-gray-900 dark:text-white duration-200">
                    <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl max-w-full font-bold dark:text-white">Products</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {
                        productData.map((data) => (
                            <div className="group rounded-2xl bg-white dark:bg-gray-900 hover:bg-primary shadow-xl duration-200 max-w-xs mx-auto">
                                <div className="overflow-hidden">
                                    <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-t-2xl hover:scale-105 duration-200"/>
                                </div>
                                <div className="p-5 text-center">
                                    <h3 className="text-xl font-semibold dark:text-white group-hover:text-white duration-200">{data.title}</h3>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    </>
};

export default Blogs;
