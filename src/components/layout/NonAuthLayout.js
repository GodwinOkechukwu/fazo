import { Flex, Box, VStack, Image } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
const NonAuthLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const hideLogoRoutes = ["/login", "/signup", "/verify-code"];
  const showLogo = !hideLogoRoutes.includes(pathname);

  const FazoLogo = () => (
    <Box
      display={{ base: "none", md: "block" }}
      position="relative"
      w="200px"
      h="100px"
      mb={2}>
      <Image src={logo} alt="fazo-logo" />
    </Box>
  );
  return (
    <Flex
      minH="100vh"
      bgColor="#F9FAFB"
      align="center"
      justify="center"
      px={4}
      direction="column">
      <VStack mb={8} spacing={0}>
        {showLogo && <FazoLogo />}
      </VStack>

      {/* The White Card */}
      <Box
        w="100%"
        maxW="788px"
        bg="white"
        p={10}
        borderRadius="12px"
        boxShadow="0 10px 30px rgba(0,0,0,0.04)">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default NonAuthLayout;
