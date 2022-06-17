import NextLink from 'next/link'
import {
    Box,
    Button, 
    useColorModeValue
  } from '@chakra-ui/react'

export default function ProceedButton() {
  return (
    <Box my={6} align="center">
        <NextLink href="/Result" passHref>
          <Button mr={3}>
            Enter
          </Button>
        </NextLink>
    </Box>
  )
}
