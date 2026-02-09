import { Button } from "@chakra-ui/react";

const CustomButton = ({ children, bg, color, ...props }) => {
  return (
    <Button
      // Layout & Sizing
      w="100%"
      h="50px"
      borderRadius="10px"
      // Styling Props (Passed from parent)
      bg={bg}
      color={color}
      fontFamily="'Ubuntu', sans-serif"
      fontSize="14px"
      fontWeight="700"
      lineHeight="100%"
      letterSpacing="0%"
      // Hover/Active states
      _hover={{ opacity: 0.9 }}
      _active={{ transform: "scale(0.98)" }}
      // Spread any other standard Chakra props (loading, type, etc.)
      {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
