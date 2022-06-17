import React, { forwardRef } from 'react';
import {
    Container,
    Heading,
    Stack,
    useColorModeValue
  } from '@chakra-ui/react';

import SelectOptions from './SelectOptions'

 const Options = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Container maxW="{'5xl'}" pt={20}>
      <Stack
            textAlign={'center'}
            align={'center'}
      >
      <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              lineHeight={'110%'}>
              HOW TO? {' '}
      </Heading>
      <SelectOptions />
      </Stack>
      </Container>
    </div>
  );
});

Options.displayName = "Options"
export default Options;