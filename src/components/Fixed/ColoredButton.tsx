import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
// import styled from "styled-components";

// const ButtonStyle = styled<props, "div">("div")`
//   margin-top: 2rem;
//   .button {
//     font-size: 2.2rem;
//     background-color: ${(props) =>
//       props.outline ? "transparent" : "var(--gray-1)"};
//     padding: 0.7em 2em;
//     border: 2px solid var(--gray-1);
//     border-radius: 8px;
//     display: inline-block;
//     color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
//   }
//   @media only screen and (max-width: 768px) {
//     .button {
//       font-size: 1.8rem;
//     }
//   }
// `;

export default function ColoredButton({
  btnText,
  textColor,
  rounded,
  href,
  onClick,
  mr,
}: {
  btnText?: string;
  textColor?: string;
  rounded?: string;
  href?: string;
  onClick?: any;
  mr?: number;
}) {
  return (
    <Button
      rounded={rounded}
      px={6}
      mr={mr}
      colorScheme={useColorModeValue("blue", "primary")}
      _hover={{ bg: useColorModeValue("blue.600", "orange.500") }}
      bg={useColorModeValue("blue.500", "orange.300")}
      color={textColor}
      onClick={onClick}
    >
      {btnText}
    </Button>
  );
}
