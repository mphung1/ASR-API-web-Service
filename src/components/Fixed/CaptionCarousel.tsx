import React, { ReactNode } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Link,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import ColoredButton from "./ColoredButton";
import API_dashboard from "../../pages/API_Dashboard";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const LinkItem = ({
  href,
  path,
  children,
}: {
  href: string;
  path: string;
  children: ReactNode;
}) => {
  const active = path == href;
  return (
    <NextLink href={href}>
      <Link p={2}>{children}</Link>
    </NextLink>
  );
};

export default function CaptionCarousel(props) {
  const [slider, setSlider] = React.useState<Slider>(null);

  // Breakpoints which changes the position of buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30 %", md: "40px" });
  interface CardProps {
    title: string;
    text?: string;
    image: string;
    linkText?: string;
    href?: string;
  }

  const cards: Array<CardProps> = [
    {
      title: "ASR",
      text: "Automated Speech Recognition is a technology which enables machines to recognize and convert spoken language into text. ",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      linkText: "",
      href: ".",
    },

    {
      title: "Our Tech Stack",
      text: "",
      image:
        "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      linkText: "",
      href: ".",
    },
    {
      title: "The API Documentation",
      text: "",
      image:
        "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
      linkText: "API Dashboard",
      href: ".",
    },
    {
      title: "The application demo",
      text: "",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
      linkText: "Check out",
      href: ".",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            // position="relative"
            // backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* Customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -100%)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                  {card.text}
                </Text>
                <LinkItem href={card.href} path={props}>
                  {card.linkText}
                </LinkItem>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
