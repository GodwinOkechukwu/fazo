import { Box, VStack, Image, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
const OnboardingLayout = () => {
  return (
    <>
      <Container maxW="container.lg">
        <VStack spacing={10} align="center">
          {/* This renders your Signup/Onboarding steps */}
          <Box bg="white" w="100%" display="flex" p={8} borderColor="gray.100">
            <Box
              display={{ base: "none", md: "block" }}
              position="relative"
              w="162px"
              h="100px"
              mb={2}>
              <Image src={logo} alt="fazo-logo" />
            </Box>
            <Outlet />
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default OnboardingLayout;
