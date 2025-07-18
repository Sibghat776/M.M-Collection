// src/Components/Login.jsx
import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import { useModalContext } from "../ContextApi/ModalContext";
import { showToast } from "../Common Functions/commonFunction";

const Login = () => {

  const { state, dispatch } = useModalContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    if (formData.username && formData.email && formData.password) {
      return showToast("Registered Successfully", "success", "light")
    }
    else {
      showToast("Missing Fields!", "error", "dark")
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_LOGIN" });
  };

  return (
    <Modal open={state.loginOpen} onClose={handleClose}>
      <Box className="w-[90%] sm:w-[400px] bg-white p-6 rounded-xl shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">LOGIN</h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

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
            fullWidth
            size="small"
            type={showPassword ? "text" : "password"}
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
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button onClick={handleClick} variant="contained" size="large" fullWidth>
            Log In
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Login;