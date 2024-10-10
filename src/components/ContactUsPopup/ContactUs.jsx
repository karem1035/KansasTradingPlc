import React from "react";

const ContactUs = () => {
    return <>
        <div className="p-6">
            <h1 className="text-3xl text-white font-bold text-center mb-4">Send Us Message</h1>
            <form className="flex flex-col gap-3">
                <div>
                    <label htmlFor="text" className="input-label">First Name</label>
                    <input type="text" id="name" className="input"/>
                </div>
                <div>
                    <label htmlFor="text" className="input-label">Last Name</label>
                    <input type="text" id="name" className="input"/>
                </div>
                <div>
                    <label htmlFor="email" className="input-label">Email</label>
                    <input type="email" id="name" className="input"/>
                </div>
                <div>
                    <label htmlFor="message" className="input-label">Message</label>
                    <textarea id="message" className="input h-24"/>
                </div>
            </form>
            <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-full mt-7 block w-full hover:scale-105 transition-all duration-300 shadow-custom-inset px-5">
                send
            </button>
        </div>
    </>
};

export default ContactUs;
