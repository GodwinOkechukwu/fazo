import React, { useState } from "react";
import { VStack, Text, Input, Box } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";

const FormikInput = ({
  name,
  label,
  placeholder,
  type = "text",
  showPasswordToggle,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password" && showPasswordToggle;
  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <VStack align="flex-start" spacing={0} w="100%" position="relative">
      <Box position="relative" w="100%" mt={2}>
        {/* Floating Label Style */}
        <Text
          position="absolute"
          fontFamily="Poppins"
          top="-10px"
          left="12px"
          bg="white"
          fontSize="14px"
          fontWeight="400"
          zIndex={2}
          color={touched && error ? "red.500" : "#313131"}
          pointerEvents="none">
          {label}
        </Text>

        <Input
          fontFamily="Poppins"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={inputType}
          placeholder={placeholder}
          h="50px"
          borderRadius="8px"
          borderColor={touched && error ? "red.500" : "gray.300"}
          _focus={{
            borderColor: "#1d27cc",
            boxShadow: "none",
          }}
          pr={isPasswordField ? "50px" : "10px"}
        />

        {isPasswordField && (
          <Box
            as="button"
            type="button" // Prevents form submission on click
            onClick={() => setShowPassword(!showPassword)}
            position="absolute"
            top="50%"
            right="12px"
            transform="translateY(-50%)"
            bg="transparent"
            border="none"
            cursor="pointer"
            zIndex={3}>
            {showPassword ? (
              <EyeOff stroke="black" width={20} height={20} />
            ) : (
              <Eye stroke="black" width={20} height={20} />
            )}
          </Box>
        )}
      </Box>

      {touched && error && (
        <Text fontSize="xs" color="red.500" fontFamily="Poppins" mt={0}>
          {error}
        </Text>
      )}
    </VStack>
  );
};

export default FormikInput;
