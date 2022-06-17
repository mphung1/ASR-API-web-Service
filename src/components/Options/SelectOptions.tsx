import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import URLModal from '../Modal/URLModal'
import UploadModal from '../Modal/UploadModal'
import SearchModal from '../Modal/SearchModal'


const WrapOptions = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const OptionContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};


const OptionText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const IllustrationImg = ({
  src,
}: {
  src: any;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Image src={src} mb={2} borderRadius='full'
              boxSize='100px'
              alt='Image for illustration purpose'
      />
    </Flex>
  );
};

 const SelectOptions = () => {
  return (
    <Box bg={useColorModeValue('#FBD38D', 'orange')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Get started</Heading>
          <Text>// Choose 1 among 3 options below</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <WrapOptions>
            <OptionContent>
              <URLModal />
              <OptionText>
                Send the link to the video.
                Send the link to the video.
                Send the link to the video.
                Send the link to the video.
              </OptionText>
            </OptionContent>
            <IllustrationImg
              src= {'https://static.thenounproject.com/png/770619-200.png'}
            />
          </WrapOptions>
          
          <WrapOptions>
            <OptionContent>
              <UploadModal> 
                UPLOAD VIDEO
              </UploadModal>
              <OptionText>
                Upload your own video.
                Upload your own video.
                Upload your own video.
                Upload your video.
              </OptionText>
            </OptionContent>
            <IllustrationImg
              src={
                'https://www.pngmart.com/files/1/Video-Icon-PNG-Free-Download.png'
              }
            />
          </WrapOptions>

          <WrapOptions>
            <OptionContent>
              <SearchModal />
              <OptionText>
                Search for your video on Youtube.
                Search for your video on Youtube.
                Search for your video on Youtube.
              </OptionText>
            </OptionContent>
            <IllustrationImg
              src={
                'https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-1-2/256/Video_Search-512.png'
              }
            />
          </WrapOptions>
        </Stack>
      </Container>
    </Box>
  );
};

export default React.forwardRef(SelectOptions)