// src/Components/ProductCards.jsx
import React, { memo } from "react";
import clothesMain from "../assets/clothes/Mens Clothes Main.jpg";
import pensImg from "../assets/carousel/Pens and Men Accessories.jpg";
import scrubImg from "../assets/scrub/Scrub fits title.jpg";
import electronicsImg from "../assets/electronic devices/Main.jpg";

const data = [
    { name: "Clothes", img: clothesMain, link: "/clothes" },
    { name: "Pens & Accessories", img: pensImg, link: "/accessories" },
    { name: "Scrub", img: scrubImg, link: "/scrub" },
    { name: "Electronic Devices", img: electronicsImg, link: "/electronicDevices" },
];

const Cards = () => {
    return (
        <div id="collection" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
            {data.map(({ name, img, link }, idx) => (
                <a
                    href={link}
                    rel="noreferrer"
                    key={idx}
                    className="relative group rounded shadow-lg overflow-hidden"
                >
                    <img
                        src={img}
                        alt={name}
                        className="w-full h-64 object-cover group-hover:brightness-50 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl md:text-2xl font-bold group-hover:text-yellow-300 transition-all">
                            {name}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default memo(Cards);
