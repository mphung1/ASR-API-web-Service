import { useState } from 'react'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    useColorModeValue
  } from '@chakra-ui/react';
import Image from 'next/image'
import heroPhoto from '../../../public/images/photo.png'
import Type from "./type"
import NextLink from 'next/link'
import React from 'react';
  
  const Hero = ({ resultRef }) => {
    const [ name, setName ] = useState("")

    const onSubmit = (e) => {
      e.preventDefault();
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <Container maxW="container.lg">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 20, md: 1 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Video Transcripts {' '}
            <Text as={'span'} color={useColorModeValue('blue','orange')}>
              made easy
            </Text>
            <Type />
          </Heading>
          <Text colorScheme={'gray.500'} maxW={'3xl'}>
          ASR is a powerful subtitle-generating application that lets you create video transcripts, customize them, and even sync them in the cloud so you can use them anywhere. 
          From closed captions provided by YouTube to transcriptions of meetings on Zoom, all is free!
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={useColorModeValue('blue','primary')}
              bg={useColorModeValue('blue','orange')}
              type="submit"
              onClick={onSubmit}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            <NextLink href="https://github.com/ash2916/ASR" passHref>
            <Button rounded={'full'} px={6}>
              How it was made
            </Button>
            </NextLink>
          </Stack>
          <Flex w={'full'}>
            <Image
              src={heroPhoto}
              alt="Picture of the author"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Flex>
        </Stack>
      </Container>
    );
  }

  export default React.forwardRef(Hero);