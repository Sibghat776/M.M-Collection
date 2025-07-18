import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import Clothes from "../assets/carousel/Clothes Carousel.jpeg";
import Pens from "../assets/carousel/Pens.avif";
import Accessories from "../assets/carousel/Accessories.jpeg";
import Scrub from "../assets/Scrub/Scrub fits title.jpg";

const slides = [
    {
        image: Accessories,
        title: "Mens Accessories",
        description: "Complete your look with our best accessories collection.",
    },
    {
        image: Clothes,
        title: "Stylish Clothes",
        description: "Trendy outfits delivered quickly across Pakistan.",
    },
    {
        image: Pens,
        title: "Smooth Pens",
        description: "Premium quality pens for school, office, and more.",
    },
    {
        image: Scrub,
        title: "Scrub",
        description: "Premium quality Scrub for Hospital, Labs, and more.",
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const { image, title, description } = slides[currentIndex];

    return (
        <motion.div
            className="w-full mt-6 md:mt-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
        >
            <div className="w-full max-w-screen-xl mx-auto rounded overflow-hidden shadow-xl relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[300px] md:h-[450px] object-cover transition-all duration-500"
                />

                {/* Arrow Buttons */}
                <button
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
                    onClick={goToPrevious}
                >
                    <ChevronLeft />
                </button>
                <button
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
                    onClick={goToNext}
                >
                    <ChevronRight />
                </button>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center p-4">
                    <h3 className="text-lg md:text-2xl font-semibold uppercase">{title}</h3>
                    <p className="text-sm md:text-base">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Carousel;