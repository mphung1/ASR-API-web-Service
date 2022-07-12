import React, { ReactNode, ReactText, useState } from "react";
import {
  Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  Heading,
  Text,
  Container,
  Flex,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Box,
  CloseButton,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import CoreResources from "./CoreResources";
import Plugin from "./Plugin";
import Layout from "./Layout";

export default function Content() {
  let location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/API_Dashboard" element={<Layout />}>
          <Route index element={<CoreResources />} />
          <Route path="/API_Dashboard/Plugin" element={<Plugin />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

function Modal() {
  let navigate = useNavigate();

  let buttonRef = React.useRef<HTMLButtonElement>(null);
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to homepage</Link>
      </p>
    </div>
  );
}
