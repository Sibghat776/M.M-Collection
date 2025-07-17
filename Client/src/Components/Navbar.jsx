// src/Components/Navbar.jsx
import React from "react";
import { Button } from "@mui/material";
import { Home, Collections, Login, PersonAdd } from "@mui/icons-material";
import logo from "../assets/carousel/Logo.png";

const Navbar = ({ onLoginClick, onSignupClick }) => {
    return (
        <nav className="sticky top-0 z-50 bg-gray-950 text-white shadow-lg">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-10 w-10 rounded-full border border-white"
                    />
                    <h1 className="text-2xl font-bold font-[Dancing Script] tracking-wide">
                        M.M Collection
                    </h1>
                </a>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 items-center text-lg font-medium">
                    <li className="flex items-center gap-1 hover:text-blue-400 transition">
                        <Home fontSize="small" />
                        <a href="/">Home</a>
                    </li>
                    <li className="flex items-center gap-1 hover:text-blue-400 transition">
                        <Collections fontSize="small" />
                        <a href="#collection">My Collection</a>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="hidden md:flex gap-3 items-center">
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<PersonAdd />}
                        onClick={onSignupClick}
                        sx={{
                            color: "#fff",
                            borderColor: "#90caf9",
                            "&:hover": {
                                backgroundColor: "#1976d2",
                                borderColor: "#1976d2",
                            },
                        }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Login />}
                        onClick={onLoginClick}
                        sx={{
                            textTransform: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </Button>
                </div>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden">
                    {/* Optionally add a hamburger menu here */}
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Navbar);