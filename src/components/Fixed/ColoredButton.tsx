import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";

interface ColoredButtonProps {
  btnText: string;
  textColor?: string;
  rounded?: string;
  href?: string;
  onClick?: any;
  mr?: number;
  onchange?(): any;
}

export default function ColoredButton({
  btnText,
  textColor,
  rounded,
  onClick,
  mr,
}: ColoredButtonProps) {
  return (
    <Button
      rounded={rounded}
      px={4}
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
