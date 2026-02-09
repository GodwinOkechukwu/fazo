import { VStack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import CustomButton from "../../components/common/CustomButton";
const AuthSelection = () => {
  const navigate = useNavigate();

  const FazoLogo = () => (
    <Box
      display={{ base: "block", md: "none" }}
      position="relative"
      w="100px"
      h="100px"
      mb={2}>
      <img src={logo} alt="fazo-logo" />
    </Box>
  );

  return (
    <VStack spacing={12} w="100%" h="200px" align="center">
      {/* Brand Header */}
      <VStack spacing={0}>
        <FazoLogo />
      </VStack>

      {/* Action Buttons */}
      <VStack spacing={4} margin="auto" w={{ base: "100%", md: "400px" }}>
        <CustomButton
          w="100%"
          h="52px"
          bg="#1815D1"
          color="white"
          fontSize="14px"
          fontWeight="bold"
          borderRadius="8px"
          _hover={{ bg: "#1412B0" }}
          _active={{ bg: "#0F0E8A" }}
          onClick={() => navigate("/email-verification")}>
          Sign Up
        </CustomButton>

        <CustomButton
          w="100%"
          h="52px"
          bg="white"
          color="#1815D1"
          fontSize="14px"
          fontWeight="bold"
          borderRadius="8px"
          border="1px solid #1815D1"
          _hover={{
            bg: "rgba(24, 21, 209, 0.05)",
          }}
          _active={{
            bg: "rgba(24, 21, 209, 0.1)",
          }}
          onClick={() => navigate("/login")}>
          Login
        </CustomButton>
      </VStack>
    </VStack>
  );
};

export default AuthSelection;
