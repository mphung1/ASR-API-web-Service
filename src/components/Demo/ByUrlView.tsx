import React, { useState } from "react";
import {
  Container,
  Text,
  Flex,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

function ByUrlView() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Container mt="5">
      <Text mb="8px">Paste Youtube URL here {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="https://"
        size="sm"
        focusBorderColor={useColorModeValue("blue.500", "orange.300")}
      />

      <Text color="gray" fontSize="md" mt="150">
        If your URL is correct, you&apos;ll see a video preview here. Large
        videos may take a few minutes to appear.
      </Text>
    </Container>
  );
}

export default ByUrlView;
