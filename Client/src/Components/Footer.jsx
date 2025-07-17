import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import logo from "../assets/carousel/Logo.png";

const Footer = () => {
    return (
        <motion.footer
            className="bg-gray-900 text-gray-300 px-6 md:px-20 pt-12 pb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo and About */}
                <div>
                    <img src={logo} alt="Logo" className="h-12 mb-4" />
                    <p className="text-sm leading-relaxed text-gray-400">
                        Your one-stop solution for quality clothes, accessories, and more — delivered with speed and care across Pakistan.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#about" className="hover:text-white transition-all duration-300">Home</a></li>
                        <li><a href="#collection" className="hover:text-white transition-all duration-300">Products</a></li>
                        <li><a href="#about" className="hover:text-white transition-all duration-300">About Us</a></li>
                        <li><a href="#contact" className="hover:text-white transition-all duration-300">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                    <p className="text-sm text-gray-400 mb-2">Email: <a href="maito:ullahsibghat786@gmail.com">ullahsibghat786@gmail.com</a></p>
                    <p className="text-sm text-gray-400 mb-2">Phone: +92 334 3688913</p>
                    <p className="text-sm text-gray-400">Address: Karachi, Pakistan</p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-blue-500 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="hover:text-pink-500 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="hover:text-sky-400 transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/sibghat776/" target="_blank" className="hover:text-blue-400 transition-colors">
                            <LinkedIn size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-10 border-t border-gray-700 pt-4 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Your Store. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;
