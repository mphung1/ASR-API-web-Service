import React, { forwardRef } from 'react';
import {
    Stack,
    useColorModeValue
  } from '@chakra-ui/react';
import SelectOptions from './SelectOptions'
import AppFlowImg from '../../../public/images/processFlow.drawio.png'

 const Options = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
        <SelectOptions />
    </div>
  );
});

Options.displayName = "Options"
export default Options;