// src/Components/Navbar.jsx
import React, { useState } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {
    Login,
    PersonAdd,
    Menu as MenuIcon,
    Close as CloseIcon
} from "@mui/icons-material";
import { useModalContext } from "../ContextApi/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/carousel/Logo.png";
import { useAuthContext } from "../ContextApi/AuthContext";

const Navbar = () => {
    const { dispatch } = useModalContext();
    const { authState, authDispatch } = useAuthContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    console.log(authState.username, "username from context");

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Contact Us", href: "#contact" },
        {
            label: "My Collection",
            submenu: [
                { label: "Clothes", href: "/clothes" },
                { label: "Scrub", href: "/scrub" },
                { label: "Electronic Devices", href: "/electronicDevices" },
                { label: "Man Accessories", href: "/accessories" },
            ],
        },
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

                {/* Desktop Nav */}<ul className="hidden md:flex gap-10 items-center text-lg font-medium">
                    {navLinks.map((link, index) =>
                        link.submenu ? (
                            <li key={index} className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-1 hover:text-blue-500 transition"
                                >
                                    {link.label}
                                    {dropdownOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                                </button>
                                {dropdownOpen && (
                                    <ul className="absolute right-0 mt-3 w-60 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-200">
                                        {link.submenu.map((sublink, subIndex) => (
                                            <li key={subIndex}>
                                                <a
                                                    href={sublink.href}
                                                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
                                                >
                                                    {sublink.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="hover:text-blue-500 transition duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        )
                    )}
                </ul>

                {/* Desktop Buttons */}
                {authState.username ? <div className="relative">
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="text-blue-300 font-semibold capitalize hover:text-white transition"
                    >
                        {authState.username}
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-50">
                            <button
                                onClick={() => {
                                    authDispatch({ type: "LOGOUT" });
                                    setMenuOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div> : <div className="hidden md:flex gap-3 items-center">
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
                </div>}

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
                            {authState.username ? (
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {
                                        authDispatch({ type: "LOGOUT" });
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
                                    Logout
                                </Button>
                            ) : (
                                <>
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
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default React.memo(Navbar);