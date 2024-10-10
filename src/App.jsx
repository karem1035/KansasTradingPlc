import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs"
import Values from "./components/Values/values"
import Products from "./components/products/products"
import Footer from "./components/Footer/footer"
import LoginPopup from "./components/LoginPopup/LoginPopup"

const App = () => {
  const [loginPopup, setLoginPopup] = React.useState(false);

  const toggleLoginPopup = () => {
    setLoginPopup((prev) => !prev);
  };

  return <>
    <div>
      <Navbar toggleLoginPopup={toggleLoginPopup}/>
      <Hero/>
      <AboutUs/>
      <Values/>
      <Products/>
      <Footer/>
      <LoginPopup loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup}/>
    </div>
  </>
};

export default App;
