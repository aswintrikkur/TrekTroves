import { configureStore } from "@reduxjs/toolkit";
// import  menuReducer  from "./features/menuSlice";
import routesReducer from './features/routesSlice'

export const store = configureStore({
    reducer: {
        routes: routesReducer,
        // products: productReducer,
        // cart: 
    }
});
