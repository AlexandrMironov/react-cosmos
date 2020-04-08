import React from 'react';
import { Barcode } from '../src/Barcode/components';
import { ReduxProvider } from '../utils/ReduxProvider';

export default (
  <ReduxProvider>
    <Barcode />
  </ReduxProvider>
);