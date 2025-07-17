// src/Components/Login.jsx
import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="w-[90%] sm:w-[400px] bg-white p-6 rounded-xl shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">LOGIN</h2>
        <div className="flex flex-col gap-4">
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
          <Button variant="contained" size="large" fullWidth>
            Log In
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Login;
