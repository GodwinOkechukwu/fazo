import { Box, Flex, VStack, Image, Text, Link, Icon } from "@chakra-ui/react";
import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, Home, Users, UserCircle, Wallet } from "lucide-react";
import logo from "../../assets/logo.png";

const AuthLayout = () => {
  return (
    <Flex h="100vh" overflow="hidden">
      {/* Sidebar */}
      <Box
        w="260px"
        bg="white"
        borderRight="1px solid"
        borderColor="gray.100"
        p={6}>
        <VStack align="flex-start" spacing={10}>
          <Box
            display={{ base: "none", md: "block" }}
            position="relative"
            w="162px"
            h="100px"
            mb={2}>
            <Image src={logo} alt="fazo-logo" />
          </Box>

          <VStack align="flex-start" spacing={4} w="100%">
            <SidebarItem
              icon={LayoutDashboard}
              label="Dashboard"
              to="/dashboard"
            />
            <SidebarItem icon={Home} label="My Properties" to="/properties" />
            <SidebarItem icon={Users} label="Customers" to="/customers" />
            <SidebarItem icon={UserCircle} label="Profile" to="/profile" />
            <SidebarItem icon={Wallet} label="Wallet" to="/wallet" />
          </VStack>
        </VStack>
      </Box>

      {/* Main Content Area */}
      <Box flex="1" bg="#F9FAFB" overflowY="auto" p={8}>
        <Outlet />
      </Box>
    </Flex>
  );
};

// Helper for Sidebar Links
const SidebarItem = ({ icon, label, to }) => (
  <Link
    as={NavLink}
    to={to}
    w="100%"
    p={3}
    borderRadius="8px"
    display="flex"
    alignItems="center"
    gap={3}
    _activeLink={{ bg: "blue.50", color: "#1d27cc", fontWeight: "600" }}
    _hover={{ bg: "gray.50", textDecoration: "none" }}>
    <Icon as={icon} />
    <Text fontSize="14px">{label}</Text>
  </Link>
);

export default AuthLayout;
