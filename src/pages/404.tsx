import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

import Boxes from '../components/Boxes'

const NotFound = () => {
  return (
    <>
    <Container >
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme={useColorModeValue('blue', 'orange')}>
          Return to home
          </Button>
        </NextLink>
      </Box>
      <Boxes />
    </Container>
    </>
  )
}

export default NotFound