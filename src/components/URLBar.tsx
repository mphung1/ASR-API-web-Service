import { Input, Stack, useColorModeValue } from '@chakra-ui/react'

export default function URLBar() {
  return (
    <Stack spacing={3}>
  <Input 
    focusBorderColor={useColorModeValue('#000000', '#F6AD55')} 
    placeholder='https://' 
    />
  {/* <Input
    isInvalid
    focusBorderColor={useColorModeValue('#38B2AC', '#F6AD55')}
    errorBorderColor='red.500'
    placeholder="Please enter a value URL, e.g 'https://abcxyz.com/'"
  /> */}
</Stack>

  )
}
