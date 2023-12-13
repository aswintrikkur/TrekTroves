import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    hasTolls: false,
    distance: {},
    costs: {},
    tolls: [],
    polyline: ''


}

const tollsSlice = createSlice({
    name: 'tolls',
    initialState: INITIAL_STATE,
    reducers: {
        addTolls: (state, action) => {
            const { route } = action.payload;
            console.log(route);
            state.hasTolls = route.hasTolls;
            state.distance = route.distance;
            state.costs = route.costs
            state.tolls = route.tolls
            state.polyline = route.polyline
        },
        clearTolls: (state, action) => {
            state.hasTolls= false,
            state.distance= {},
            state.costs= {},
            state.tolls= [],
            state.polyline= ''
                    
        }

    }
});

export const { addTolls, clearTolls } = tollsSlice.actions;

export default tollsSlice.reducer; 
