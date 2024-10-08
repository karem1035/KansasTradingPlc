import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs"
import Values from "./components/Values/values"
import Products from "./components/products/products"
import Footer from "./components/Footer/footer"

const App = () => {
  return <>
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Values/>
      <Products/>
      <Footer/>
    </div>
  </>
};

export default App;
