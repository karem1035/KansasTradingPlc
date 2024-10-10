import React, { useRef } from "react";
import {motion} from "framer-motion";
import ContactUs from "./ContactUs";


const LoginPopup = ({ loginPopup, toggleLoginPopup }) => {
    const loginPopupRef = useRef();

    window.addEventListener("click", (e) => {
        if (loginPopupRef.current === e.target) {
            toggleLoginPopup();
        }
    });
    return (
    <>
        {loginPopup && (
            <div ref={loginPopupRef} className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-auto shadow-custom-inset">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }} 
                        className="rounded-2xl bdj-white/10 backdrop-blur-md sm:w-[600px] md:w-[380px]">
                        <ContactUs />
                    </motion.div>
                </div>
            </div>
        )}
    </>
    );
};

export default LoginPopup;
