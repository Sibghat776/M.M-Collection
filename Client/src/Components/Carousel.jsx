import React from "react";
import { motion } from "framer-motion";
import clothesCarousel from "../assets/carousel/Clothes Carousel.jpeg";

const Carousel = () => {
    return (
        <motion.div
            className="w-full mt-6 md:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-screen-xl mx-auto rounded overflow-hidden shadow-xl">
                <img
                    src={clothesCarousel}
                    alt="Clothes"
                    className="w-full h-[300px] md:h-[450px] object-cover"
                />
                <div className="bg-black text-white text-center p-4">
                    <h3 className="text-lg font-semibold uppercase">Clothes</h3>
                    <p>Fast and reliable delivery across Pakistan...</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Carousel;
