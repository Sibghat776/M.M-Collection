// src/Context/ModalContext.jsx
import { createContext, useContext, useReducer, memo } from "react";

// Context create
export const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);

// Initial modal state
const initialValue = {
    loginOpen: false,
    signupOpen: false,
};

// Reducer
function reducer(state, action) {
    switch (action.type) {
        case "OPEN_LOGIN":
            return { ...state, loginOpen: true };
        case "CLOSE_LOGIN":
            return { ...state, loginOpen: false };
        case "OPEN_SIGNUP":
            return { ...state, signupOpen: true };
        case "CLOSE_SIGNUP":
            return { ...state, signupOpen: false };
        default:
            return state;
    }
}

// Context provider component
function ModalProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <ModalContext.Provider value={{ state, dispatch }}>
            {children}
        </ModalContext.Provider>
    );
}

export default memo(ModalProvider);
