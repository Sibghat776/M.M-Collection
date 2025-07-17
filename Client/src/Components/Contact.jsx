import React from 'react';
import { TextField, Button } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, Instagram, Twitter } from '@mui/icons-material';

const Contact = () => {
    return (
        <div id="contact" className="w-full bg-white py-12 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        We'd love to hear from you. Whether it's a question, feedback, or just a hello — drop us a message!
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <div className="flex items-center gap-3">
                            <Email className="text-blue-500" />
                            <span><a href="maito:ullahsibghat786@gmail.com">ullahsibghat786@gmail.com</a></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-green-500" />
                            <span>+92 334 3688913</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <LocationOn className="text-red-500" />
                            <span>Karachi, Pakistan</span>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mt-6">
                        <a href="https://www.linkedin.com/in/sibghat776/" target='_blank'><LinkedIn className="text-blue-600 cursor-pointer hover:scale-110 transition-transform" fontSize="large" /></a>
                        <Instagram className="text-pink-500 cursor-pointer hover:scale-110 transition-transform" fontSize="large" />
                        <Twitter className="text-sky-500 cursor-pointer hover:scale-110 transition-transform" fontSize="large" />
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                    <form className="space-y-5">
                        <TextField fullWidth label="Your Name" variant="outlined" />
                        <TextField fullWidth label="Your Email" variant="outlined" />
                        <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                        <Button variant="contained" color="primary" fullWidth className="mt-2">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;