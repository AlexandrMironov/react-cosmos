
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    textValue: '',
};

export const textReducer = createSlice({
    name: 'widgets/TextField',
    initialState,
    reducers: {
        addFooToText(state, action) {
            state.textValue = action.payload;
        },
        delFooText(state, action) {
            state.textValue = '';
        }
    },
});

export const {
    addFooToText,
    delFooText,
} = textReducer.actions;
