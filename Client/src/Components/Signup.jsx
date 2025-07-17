// src/Components/Signup.jsx
import React, { useState } from "react";
import {
    Modal,
    Box,
    TextField,
    MenuItem,
    Button,
    IconButton,
    InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";

const cities = [
    "Karachi",
    "Islamabad",
    "Balochistan",
    "Quetta",
    "Peshawar",
    "Lahore",
    "Other",
];

const Signup = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        area: "",
        address: "",
        city: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="w-[90%] sm:w-[500px] bg-white p-6 rounded-2xl shadow-2xl relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Close Icon */}
                <IconButton
                    onClick={onClose}
                    className="top-[-10px] right-2 text-gray-500 hover:text-black"
                >
                    <CloseIcon />
                </IconButton>

                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-wide">
                    Create an Account
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        size="small"
                        value={formData.email}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        size="small"
                        value={formData.password}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon fontSize="small" />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="Residential Area"
                        name="area"
                        fullWidth
                        className="sm:col-span-2"
                        size="small"
                        value={formData.area}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="House Address"
                        name="address"
                        fullWidth
                        className="sm:col-span-2"
                        size="small"
                        value={formData.address}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HomeIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="City"
                        name="city"
                        select
                        fullWidth
                        size="small"
                        value={formData.city}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationCityIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        }}
                    >
                        {cities.map((city) => (
                            <MenuItem key={city} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div className="flex justify-center mt-6">
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                            paddingY: "10px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            fontSize: "15px",
                            background: "#1976d2",
                            "&:hover": { background: "#115293" },
                        }}
                    >
                        Sign Up
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default Signup;