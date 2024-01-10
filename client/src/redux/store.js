import { configureStore } from "@reduxjs/toolkit";
import routesReducer from './features/routesSlice'
import tollsReducer from './features/tollsSlice'
import  toggleReducer from './features/toggleSlice'
import  inputReducer from './features/inputSlice'


export const store = configureStore({
    reducer: {
        routes: routesReducer,
        tolls: tollsReducer,
        toggle : toggleReducer,
        input: inputReducer
    }
});
