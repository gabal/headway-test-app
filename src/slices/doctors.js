import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDoctors } from '../api/headway';

const initialState = {
    value: [],
    status: 'idle',
};

export const loadDoctors = createAsyncThunk(
    'doctors/load',
    async () => {
        const response = await fetchDoctors();
        return response;
    }
);

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        /*load: (state, action) => {
            console.log(action);
          state.value = action.payload
        },*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadDoctors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadDoctors.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload
            });
    },
})

export const selectDoctors = (state) => state.doctors;

//export const { load } = doctorsSlice.actions;

export default doctorsSlice.reducer;