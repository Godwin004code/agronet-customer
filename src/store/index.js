
import { configureStore } from "@reduxjs/toolkit";
import passwordReducer from "../components/slice/password-slice"
import loginReducer from "../components/slice/login-slice"

export const store = configureStore({
    reducer: {
        passwordToggle: passwordReducer,
        loginReducer
    }
})