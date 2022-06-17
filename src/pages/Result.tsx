import { useState, useEffect } from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import {Container, Heading } from '@chakra-ui/react'

function Result() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, [] )

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader loading={loading} /> 
      )  : (
    <Container maxW="container.lg">
      <Heading as ="h3" fontSize={20} mb={4}>
        Video
      </Heading>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5YlJt5EYrlM?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
    </Container>
    ) 
    }
    </>
)
}
  
export default Result