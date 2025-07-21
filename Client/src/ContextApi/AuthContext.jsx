import { createContext, useContext, useReducer, memo } from "react";

// Initial state
const initialState = {
    username: JSON.parse(localStorage.getItem("username")) || null,
    isAuthenticated: !!JSON.parse(localStorage.getItem("username")),
    loading: false,
    error: null,
};

// Context creation
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};

// Reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return { ...state, loading: true, error: null };
        case "SET_USERNAME":
            localStorage.setItem("username", JSON.stringify(action.payload));
            return {
                ...state,
                username: action.payload,
                isAuthenticated: true,
                loading: false,
                error: null,
            };
        case "LOGIN_SUCCESS":
            localStorage.setItem("username", JSON.stringify(action.payload.username));
            return {
                ...state,
                username: action.payload,
                isAuthenticated: true,
                loading: false,
                error: null,
            };

        case "LOGIN_FAILURE":
            return { ...state, loading: false, error: action.payload };

        case "LOGOUT":
            localStorage.removeItem("username");
            return {
                ...state,
                username: null,
                isAuthenticated: false,
                loading: false,
                error: null,
            };

        default:
            return state;
    }
};

// AuthProvider
export function AuthProvider({ children }) {
    const [authState, authDispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    );
}