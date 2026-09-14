import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './Slices/themeSlice'
import cartReducer from './Slices/cartSlice'
export const store = configureStore({
    reducer : {
        theme : themeReducer ,
        cart : cartReducer
    }
})