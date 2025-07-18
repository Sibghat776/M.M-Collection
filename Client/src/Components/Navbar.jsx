// src/Components/Navbar.jsx
import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import {
    Login,
    PersonAdd,
    Menu as MenuIcon,
    Close as CloseIcon
} from "@mui/icons-material";
import { useModalContext } from "../ContextApi/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/carousel/Logo.png";

const Navbar = () => {
    const { dispatch } = useModalContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "My Collection", href: "#collection" },
        { label: "About", href: "#about" },
        { label: "Contact Us", href: "#contact" }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gray-950 text-white shadow-md shadow-blue-300/10 backdrop-blur-lg">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 hover:opacity-90 transition">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-11 w-11 rounded-full border border-white shadow-lg"
                    />
                    <h1 className="text-2xl font-bold font-[Dancing Script] tracking-wide">
                        M.M Collection
                    </h1>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-10 items-center text-lg font-normal">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className="hover:text-blue-400 transition-all duration-200"
                        >
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-3 items-center">
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<PersonAdd />}
                        onClick={() => dispatch({ type: "OPEN_SIGNUP" })}
                        sx={{
                            color: "#fff",
                            borderColor: "#90caf9",
                            "&:hover": {
                                backgroundColor: "#1976d2",
                                borderColor: "#1976d2"
                            },
                            textTransform: "none"
                        }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<Login />}
                        onClick={() => dispatch({ type: "OPEN_LOGIN" })}
                        sx={{
                            color: "#fff",
                            borderColor: "#90caf9",
                            "&:hover": {
                                backgroundColor: "#1976d2",
                                borderColor: "#1976d2"
                            },
                            textTransform: "none"
                        }}
                    >
                        Login
                    </Button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <IconButton onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                        {menuOpen ? <CloseIcon className="text-white" /> : <MenuIcon className="text-white" />}
                    </IconButton>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-gray-900 px-6 py-4 space-y-4 text-lg font-normal border-t border-blue-800"
                    >
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="block text-white hover:text-blue-400 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex flex-col gap-2 pt-3">
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                startIcon={<PersonAdd />}
                                onClick={() => {
                                    dispatch({ type: "OPEN_SIGNUP" });
                                    setMenuOpen(false);
                                }}
                                sx={{
                                    color: "#fff",
                                    borderColor: "#90caf9",
                                    "&:hover": {
                                        backgroundColor: "#1976d2",
                                        borderColor: "#1976d2"
                                    },
                                    textTransform: "none"
                                }}
                            >
                                Sign Up
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                startIcon={<Login />}
                                onClick={() => {
                                    dispatch({ type: "OPEN_LOGIN" });
                                    setMenuOpen(false);
                                }}
                                sx={{
                                    color: "#fff",
                                    borderColor: "#90caf9",
                                    "&:hover": {
                                        backgroundColor: "#1976d2",
                                        borderColor: "#1976d2"
                                    },
                                    textTransform: "none"
                                }}
                            >
                                Login
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default React.memo(Navbar);