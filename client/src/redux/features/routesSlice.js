import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    
    routes: [],
    currentRoute: {}
}


const routesSlice = createSlice({
    name: 'routes',
    initialState: INITIAL_STATE,
    reducers: {
        addRoute: (state, action) => {
            const { route } = action.payload;

            state.currentRoute = route;
            state.routes.push(route);
        },
        getCurrentRoutes: (state, action) => {
            return state.currentRoute;
        },
        getRoutes: (state, action) => {
            return state.routes;
        }
    }
});

export const { addRoute, getCurrentRoutes, getRoutes } = routesSlice.actions;

// export const menuReducer = menuSlice.reducer; 
export default routesSlice.reducer; 
