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
import { useState, useEffect } from "react";
import { useModalContext } from "../ContextApi/ModalContext";
import { showToast } from "../Common Functions/commonFunction";
import { useAuthContext } from "../ContextApi/AuthContext.jsx";

const Signup = () => {
    const { state, dispatch } = useModalContext();
    const { signupOpen } = state;
    const { authDispatch } = useAuthContext();

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: ""
    });

    // ✅ Clear fields when modal opens
    useEffect(() => {
        if (signupOpen) {
            setCredentials({
                username: "",
                email: "",
                password: ""
            });
        }
    }, [signupOpen]);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.id]: e.target.value });
    };

    const handleClose = () => {
        dispatch({ type: "CLOSE_SIGNUP" });
        setCredentials({ username: "", email: "", password: "" }); // ✅ Clear on close
    };

    const handleClick = () => {
        const { username, email, password } = credentials;

        if (username && email && password) {
            authDispatch({
                type: "SET_USERNAME",
                payload: username,
            });
            showToast("Registered Successfully", "success", "light");

            setCredentials({ username: "", email: "", password: "" }); // ✅ Clear after submit

            setTimeout(() => {
                dispatch({ type: "CLOSE_SIGNUP" }); // ✅ Close modal after 1s
            }, 1000);
        } else {
            showToast("Missing Fields!", "error", "dark");
        }
    };

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
                <Typography fontSize={"100%"} fontWeight={600}>
                    Create Account
                </Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                <TextField
                    margin="normal"
                    onChange={handleChange}
                    label="Username"
                    id="username"
                    fullWidth
                    variant="outlined"
                    value={credentials.username}
                />
                <TextField
                    margin="normal"
                    onChange={handleChange}
                    label="Email"
                    value={credentials.email}
                    type="email"
                    id="email"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    margin="normal"
                    onChange={handleChange}
                    label="Password"
                    fullWidth
                    value={credentials.password}
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
