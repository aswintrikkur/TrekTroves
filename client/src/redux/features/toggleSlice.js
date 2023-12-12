import { createSlice } from '@reduxjs/toolkit'
import { decodeString } from '../../utils/polylines';




const INITIAL_STATE = {
    showLocateMeButton : true,
    showMarker :false,
    
}


const toggleSlice = createSlice({
    name: 'toggle',
    initialState: INITIAL_STATE,
    reducers: {
        toggleLocateMe:(state,action)=>{
            state.showLocateMeButton= !state.showLocateMeButton
        },
        toggleMarker:(state,action)=>{
            state.showMarker= !state.showMarker
        }

    }
});

export const { toggleLocateMe,  toggleMarker} = toggleSlice.actions;

export default toggleSlice.reducer; 
