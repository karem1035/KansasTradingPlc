import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import FooterImg from "../../assets/website/footer-bg.png"

const bgImg = {
    backgroundImage: `url(${FooterImg})`,
    backgroundPosition: "center",
    backgroudRepeat: "no-repeat",
    backgroundSize: "contain",
    minHeight: "400px",
    width: "100%",
}
const Footer = () => {
    return (
        <div style={bgImg} className="taxt-black mt-20 shadow-lg">
            <div className="bg-primary/20 dark:bg-gray-900/70 dark:text-white min-h-[400px]">
                <div className="container grid md:grid-cols-3 pb-20 pt-5">
                    <div>
                        <a href="#" className="font-semibold tracking-widest text-xl sm:text-3xl">
                            {" "}
                            Kansas Treding
                        </a>
                        <p className="pt-4">
                            {" "}
                             Lemi Kura Sub-city,
                             Infront of Saudi Arebia Embassy,
                             Addis Ababa Ethiopia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
