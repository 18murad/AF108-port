import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"




const initialState = {
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            toast.success('Success Register')
        },
        login: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            toast.success('daxil oldum')
        },
        logout: (state) => {
            state.user = null
            state.isAuthenticated = false
            toast.success('cixdiniz')
        },
    },
})

export const { register, login, logout} = authSlice.actions
export default authSlice.reducer