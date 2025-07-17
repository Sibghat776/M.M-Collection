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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="w-[90%] sm:w-[500px] bg-white p-6 rounded-xl shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">SIGN UP</h2>
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
                        type="password"
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
                    <Button variant="contained" size="large" fullWidth>
                        Sign Up
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default Signup;
        