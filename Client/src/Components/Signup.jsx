// src/Components/Signup.jsx
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    InputAdornment,
    Button,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useModalContext } from "../ContextApi/ModalContext";
import { showToast } from "../Common Functions/commonFunction";

const Signup = () => {
    const { state, dispatch } = useModalContext();
    const { signupOpen } = state;

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleClose = () => {
        dispatch({ type: "CLOSE_SIGNUP" });
    };
    const handleClick = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
        if (credentials.username || credentials.email || credentials.password) {
            return showToast("Registered Successfully", "success", "light")
        }
        else {
            showToast("Missing Fields!", "error", "dark")
        }
    };



    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);

    return (
        <Dialog
            open={signupOpen}
            onClose={handleClose}
            fullWidth
            maxWidth="xs"
            PaperProps={{
                style: {
                    borderRadius: "20px",
                    padding: "1.5rem",
                },
            }}
        >
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6" fontWeight={600}>
                    Create Account
                </Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                <TextField
                    margin="normal"
                    label="Username"
                    id="username"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    margin="normal"
                    label="Email"
                    type="email"
                    id="email"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    margin="normal"
                    label="Password"
                    fullWidth
                    variant="outlined"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </DialogContent>

            <DialogActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
                <Button variant="outlined" color="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleClick} variant="contained" color="primary">
                    Sign Up
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Signup;