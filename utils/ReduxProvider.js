import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { Provider } from 'react-redux';
import textReducer from '../widgets/Barcode/redux/textfieldSlice';
import * as ReactDOM from 'react-dom';
import React, { useEffect } from 'react';

export const ReduxProvider = ({children}) => {
    const store = configureStore({
        reducer: textReducer.reducer,
    });

    ReactDOM.render(<Provider store={store}>{children}</Provider>, document.getElementById('root'));
}
