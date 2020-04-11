import * as React from 'react';
import { useDispatch } from 'react-redux';
import { delFooText, addFooToText } from '../redux/index';

export const Barcode = () => {
    const dispatch = useDispatch();

    const onClearClick = () => {
        dispatch(delFooText(null));
    }

    const storeText = (e) => {
        dispatch(addFooToText(e.currentTarget.value));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: '6px' }}>
            <input onChange={storeText}/>
            <button onClick={onClearClick}>Clear text</button>
        </div>
    );
}