import React from "react";
import FooterImg from "../../assets/website/footer-bg.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarker } from "react-icons/fa";
import { MdEmail, MdCall} from "react-icons/md";

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
                <div className="container grid md:grid-cols-2 pb-20 pt-5">
                    <div>
                        <a href="#" className="uppercase border-b-8 border-primary font-semibold tracking-widest text-xl sm:text-3xl">
                            {" "}
                            Kansas Trading
                        </a>
                        <div className="pt-4 text-center flex text-primary">
                            {" "}
                             <FaMapMarker />Lemi Kura Sub-city, Summit-Goro road,
                             Infront of Saudi Arebia Embassy,
                             Addis Ababa Ethiopia
                        </div>
                        <div className="flex items-center gap-4 text-primary">
                            <MdCall /> +251987654321
                        </div>
                        <div className="flex items-center gap-4 text-primary">
                            <MdEmail /> kansastreding@gmail.com
                        </div>
                        <a href="#" className="uppercase border-b-8 border-primary font-semibold tracking-widest text-xl sm:text-3xl"> {" "} Explore Our Social Media</a>
                        <div className="pt-4 flex items-center text-primary gap-3 text-2xl">
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaLinkedin/>
                            <FaTwitter/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
