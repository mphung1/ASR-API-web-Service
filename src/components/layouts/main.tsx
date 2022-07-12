import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../Fixed/navbar";
import ScrollToTop from "../Fixed/ScrollToTop";

const Main = ({ children, router }: { children: ReactNode; router: any }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Villanova_Wildcats_logo.svg/2296px-Villanova_Wildcats_logo.svg.png"
          type="image/x-icon"
        ></link>
        <title> ASR Subtitle Generator </title>
      </Head>

      <Navbar path={router.asPath} />
      <Box pos="absolute" top="10" left="0" right="0">
        {children}
      </Box>
      <ScrollToTop />
    </Box>
  );
};

export default Main;
