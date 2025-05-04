import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Feature/basketSlice.js";



export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
});