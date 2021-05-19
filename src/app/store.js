import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from '../slices/doctors';

export const store = configureStore({
    reducer: {
        doctors: doctorsReducer,
    },
});
