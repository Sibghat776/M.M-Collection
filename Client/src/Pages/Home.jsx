import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import ProductCards from "../Components/Cards";
import Signup from "../Components/Signup.jsx";
import Login from "../Components/Login.jsx";

const Home = () => {
    const [openSignup, setOpenSignup] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    return (
        <div className="bg-white text-black min-h-screen">
            <Navbar
                onSignupClick={() => setOpenSignup(true)}
                onLoginClick={() => setOpenLogin(true)}
            />

            <Signup open={openSignup} handleClose={() => setOpenSignup(false)} />
            <Login open={openLogin} handleClose={() => setOpenLogin(false)} />

            <Carousel />

            <div className="text-center mt-16">
                <h1 className="text-3xl font-bold border-b w-max mx-auto pb-1">
                    My Collection
                </h1>
            </div>

            <ProductCards />
        </div>
    );
};

export default Home;
