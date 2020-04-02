import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import textReducer from '../widgets/Barcode/redux/textfieldSlice';
import { render } from 'react-dom';
import React from 'react';

export const ReduxProvider = ({children}) => {
    const store = configureStore({
        reducer: textReducer.reducer,
    });

    render(<Provider store={store}>{children}</Provider>, document.getElementById('root'));
}
