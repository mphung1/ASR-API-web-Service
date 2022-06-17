import {
    Flex,
    Container,
    Heading,
    Text,
    Button,
    Stack,
    Icon,
    IconProps,
    Box,
    useColorModeValue
  } from '@chakra-ui/react';

  import CloudImg from "../../../public/images/Cloud.png"
  import Image from 'next/image'

export default function OurStack() {
  return (
    <Container maxW={'5x1'}>
     <Stack
          textAlign={'center'}
          align={'center'}
    >
    <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}>
            Our Stack {' '}
    </Heading>
        <Image
            src={CloudImg}
            alt="Picture of the author"
            width={1000} 
            height={400} 
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
        />
        </Stack>
    </Container>
    
  )
}
