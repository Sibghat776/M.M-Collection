import React, { memo, useState } from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import ProductCards from "../Components/Cards";
import Signup from "../Components/Signup.jsx";
import Login from "../Components/Login.jsx";
import Footer from "../Components/Footer.jsx";
import Contact from "../Components/Contact.jsx";
import About from "../Components/About.jsx";

const Home = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            <Navbar />

            <Signup />
            <Login />

            <Carousel />

            <div className="text-center mt-16">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 tracking-wide">
                    My Collection
                </h2>
            </div>
            <ProductCards />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default memo(Home);
