import { createSlice } from '@reduxjs/toolkit'
import { decodeString } from '../../utils/polylines';

const INITIAL_STATE = {
    startPoint: [],
    endPoint: [],
    currentEncodedPolyline: '',
    currentDecodedPolyline: '',
    allRoutesPolylines: [],
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
        addCurrentRoute: (state, action) => {
            console.time('addCurrentRoute')
            const { route } = action.payload;
            state.currentEncodedPolyline = route;
            
            // decoding polyline
            const decodedPolyline = decodeString(route);
            state.currentDecodedPolyline = decodedPolyline
            
            // state.routes.push(route);
            console.timeEnd('addCurrentRoute')
        },
        getCurrentRoute: (state, action) => {
            return state.currentDecodedPolyline;
        },
        addAllRoutes:(state,action)=>{
            const {routes} = action.payload;
            let decode=[] ;
            routes.forEach(route => {
                decode.push(route?.overview_polyline?.points)
            });
            state.allRoutesPolylines = decode;

        },
        getAllRoutes: (state, action) => {
            return state.routes;
        }
    }
});

export const { addStartPoint, addEndPoint, addCurrentRoute, getCurrentRoute, addAllRoutes, getAllRoutes } = routesSlice.actions;

// export const menuReducer = menuSlice.reducer; 
export default routesSlice.reducer; 
