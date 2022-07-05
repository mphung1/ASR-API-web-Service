import React, { useState, useRef } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import NextLink from "next/link";
import emailjs from "@emailjs/browser";

const CONTACT_FORM_KEY = process.env.REACT_APP_CONTACT_FORM_KEY;

const Result = () => {
  return (
    <p>
      <i> We&apos;ll get back to you asap. </i>
    </p>
  );
};

export default function ContactUs() {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uga6d8d",
        "template_cpwxt1m",
        form.current,
        "CwDefOBhfrf52DTpD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      We&apos;d like to hear your experience.
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #FFFFFF" }}
                          leftIcon={
                            <MdEmail
                              color={useColorModeValue("#1970F1", "orange")}
                              size="20px"
                            />
                          }
                        >
                          mphung1@villanova.edu
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #FFFFFF" }}
                          leftIcon={
                            <MdLocationOn
                              color={useColorModeValue("#1970F1", "orange")}
                              size="20px"
                            />
                          }
                        >
                          Villanova, Pennsylvania
                        </Button>
                      </VStack>
                    </Box>
                    <NextLink
                      href="https://github.com/mphung1/ASR-API-web-Service"
                      passHref
                    >
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: useColorModeValue("#1970F1", "orange") }}
                        icon={<BsGithub size="28px" />}
                      />
                    </NextLink>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <form ref={form} onSubmit={sendEmail}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input type="text" name="name" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="email">
                            <FormLabel>E-mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input type="email" name="email" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="message">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              name="message"
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                            />
                          </FormControl>
                          <Input
                            variant="solid"
                            bg={useColorModeValue("#1970F1", "orange")}
                            color="white"
                            _hover={{}}
                            type="submit"
                            value="Send message"
                          />
                          {result ? <Result /> : null}
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
