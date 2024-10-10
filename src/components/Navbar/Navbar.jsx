import React from "react";
import Logo from "../../assets/website/logo.png"
import { FaPhone } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "AboutUs",
        link: "/#"
    },
    {
        id: 3,
        name: "Products",
        link: "/#"
    }
]

const Navbar = ({ toggleLoginPopup }) => {
    return <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
            <div className="flex justify-between items-center">
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="" className="w-10"/>
                    Kansas
                    </a>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <DarkMode/>
                    </div>
                    <ul className="items-center gap-4 hidden sm:flex">
                        {
                            Menu.map((menu) => (
                                <li>
                                    <a href={menu.link} className="inline-block py-4 px-4 hover:text-primary duration-200">
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                    </ul>
                    <button onClick={toggleLoginPopup} className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
                        ContactUs
                        <FaPhone className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
};

export default Navbar;
