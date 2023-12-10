import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    startPoint: [],
    endPoint: [],
    routes: [],
    currentRoute: {}
}


const routesSlice = createSlice({
    name: 'routes',
    initialState: INITIAL_STATE,
    reducers: {
        addStartPoint: (state, action) => {
            state.startPoint = action.payload;
        },
        addEndPoint: (state, action) => {
            state.endPoint = action.payload;
        },
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

export const {  addStartPoint, addEndPoint , addRoute, getCurrentRoutes, getRoutes } = routesSlice.actions;

// export const menuReducer = menuSlice.reducer; 
export default routesSlice.reducer; 
