import { toast } from "react-toastify";

export function showToast(message, type, theme) {
    toast[type](message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    });
}