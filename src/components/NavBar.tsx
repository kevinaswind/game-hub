import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { px } from "framer-motion";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" alt="logo" />
      <Text fontSize="2xl" fontWeight="bold">
        NavBar
      </Text>
    </HStack>
  );
};

export default NavBar;
