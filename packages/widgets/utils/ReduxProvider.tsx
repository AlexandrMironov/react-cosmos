import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { textReducer } from '../src/Barcode';
import { render } from 'react-dom';
import React from 'react';

interface ProviderProps {
    children?: React.ReactNode;
}

export const ReduxProvider = ({children}: ProviderProps) => {
    const store = configureStore({
        reducer: textReducer.reducer,
    });

    render(<Provider store={store}>{children}</Provider>, document.getElementById('root'));
}
