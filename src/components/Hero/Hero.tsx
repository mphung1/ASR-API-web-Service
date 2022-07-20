import React from "react";
import {
  Box,
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import Type from "./type";
import NextLink from "next/link";
import ColoredButton from "../Fixed/ColoredButton";
import DemoOptionsRoutes from "../Demo/DemoOptionsRoutes";
import { BrowserRouter } from "react-router-dom";

const SelectButton = ({ href }: { href: string }) => {
  return (
    <Box my={6}>
      <NextLink href={href} passHref>
        <ColoredButton btnText="Select" mr={3} />
      </NextLink>
    </Box>
  );
};

const Hero = ({ resultRef }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const ModalPopUp = () => {
    return (
      <>
        <Modal
          closeOnOverlayClick={false}
          size="full"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Insert the input file</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <BrowserRouter>
                <DemoOptionsRoutes />
              </BrowserRouter>
            </ModalBody>
            <ModalFooter>
              <SelectButton href="/Demo/Test" />
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <Container maxW="container.lg">
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 8 }}
        py={{ base: 20, md: 1 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Video Transcripts{" "}
          <Text as={"span"} color={useColorModeValue("blue.500", "orange.300")}>
            made easy
          </Text>
          <Type />
        </Heading>
        <Text colorScheme={"gray.500"} maxW={"3xl"}>
          ASR is an open-source subtitle generator application that makes you
          video transcripts and allows you to customize and export them. From
          closed captions provided on YouTube to notes of meetings on Zoom, all
          is now easy and accessible!
        </Text>
        <Stack spacing={6} direction={"row"}>
          <ColoredButton
            onClick={onOpen}
            btnText="Get started"
            rounded={"full"}
          />
          <ModalPopUp />
          <Button rounded={"full"} px={6} type="submit" onClick={onSubmit}>
            What this does?
          </Button>
          <NextLink href="https://github.com/ash2916/ASR" passHref>
            <Button rounded={"full"} px={6}>
              Backend models
            </Button>
          </NextLink>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
