
import { createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    path: '/login'
}

export const loginSlice = createSlice({
    name: 'LoginSlice',
    initialState,
    reducers: {
        handleLogin: (state, payload) => {
            payload.payload.preventDefault()
            window.location.pathname = '/user/dashboard'
        }
    }
})

export const {handleLogin} = loginSlice.actions

export default loginSlice.reducer