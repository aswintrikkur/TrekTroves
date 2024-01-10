import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    departure: '',
    destination: '',
    vehicle: '',
    startTime: '',
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        onChange: (state, action) => {
            // console.log('state========',state);
            console.log('action=======', action);
            const { name, value } = action.payload;
            state[name] = value;
        }


    }
});

export const { onChange } = inputSlice.actions;
export default inputSlice.reducer;