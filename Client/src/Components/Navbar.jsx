// src/Components/Navbar.jsx
import React from "react";
import { Button } from "@mui/material";
import logo from "../assets/carousel/Logo.png";

const Navbar = ({ onLoginClick,onSignupClick }) => {
    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="h-10 w-10 rounded-full mr-3" />
                <h1 className="text-2xl font-bold font-[Dancing Script]">M.M Collection</h1>
            </div>

            <ul className="hidden md:flex gap-6 items-center">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">My Collection</li>
            </ul>
            <div className="hidden md:flex items-center gap-2">
                <Button variant="contained" onClick={onSignupClick}>
                    Create Account
                </Button>
                <Button variant="outlined" onClick={onLoginClick}>
                    Login
                </Button>
            </div>

        </nav>
    );
};

export default Navbar;

