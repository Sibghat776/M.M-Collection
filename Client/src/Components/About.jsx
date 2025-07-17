import React from "react";
import { motion } from "framer-motion";
import InfoIcon from "@mui/icons-material/Info";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
    
const About = () => {
    return (
        <motion.div
            className="w-full py-14 px-4 md:px-10 bg-gradient-to-b from-white to-gray-100 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl mx-auto" id="about">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 tracking-wide">
                    Who We Are
                </h2>

                <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-14 text-gray-600">
                    We are a dedicated team focused on creating stylish and reliable products. Our goal is to inspire and deliver excellence in every category — whether it's clothing, accessories, or innovative tools.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Our Mission */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 text-center">
                        <InfoIcon className="text-blue-600 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
                        <p className="text-gray-600">
                            To provide customers with top-quality products, fast delivery, and exceptional experiences.
                        </p>
                    </div>

                    {/* Our Vision */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 text-center">
                        <EmojiObjectsIcon className="text-yellow-600 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h3>
                        <p className="text-gray-600">
                            To lead the eCommerce industry by blending creativity, functionality, and customer satisfaction.
                        </p>
                    </div>

                    {/* Our Future */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 text-center">
                        <RocketLaunchIcon className="text-purple-600 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Future</h3>
                        <p className="text-gray-600">
                            Expanding our reach with smart tech, eco-conscious products, and seamless shopping journeys.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;