import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name = "viewport" content="width=device-width, initial-scale=1" />
                <link rel = "icon" href = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Villanova_Wildcats_logo.svg/2296px-Villanova_Wildcats_logo.svg.png" 
                        type = "image/x-icon"></link>
                <title> ASR Subtitle Generator </title>
            </Head> 

            <Navbar path={router.asPath} />

            <Container maxW= "container.lg" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main

