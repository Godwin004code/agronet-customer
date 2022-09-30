
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    register: true,
    loginPwd: true
    
}

export const passwordSlice = createSlice({
    name: 'PasswordToggle',
    initialState,

    reducers: {
        handleTogglePassword: (state,payload) => {
            state.register = !state.register
            console.log(state.register);
           state.register === false ? payload.payload.current.setAttribute('type', 'text') : payload.payload.current.setAttribute('type', 'password')
        },
        handleToggleLoginPassword: (state,payload) => {
            state.loginPwd = !state.loginPwd
            console.log(state.loginPwd);
           state.loginPwd === false ? payload.payload.current.setAttribute('type', 'text') : payload.payload.current.setAttribute('type', 'password')
        },

    }
})

export const {handleTogglePassword, handleToggleLoginPassword} = passwordSlice.actions

export default passwordSlice.reducer