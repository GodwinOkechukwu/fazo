import React from "react";
import { VStack, Text, Box } from "@chakra-ui/react";

const FormikSelect = ({
  name,
  label,
  placeholder,
  options = [],
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <VStack align="flex-start" spacing={0} w="100%" position="relative">
      <Box position="relative" w="100%" mt={2}>
        {/* Floating Label */}
        <Text
          position="absolute"
          fontFamily="Poppins"
          top="-10px"
          left="12px"
          bg="white"
          px={1}
          fontSize="14px"
          fontWeight="400"
          zIndex={2}
          color={touched && error ? "red.500" : "#313131"}
          pointerEvents="none">
          {label}
        </Text>

        {/* Using a styled native select to avoid the 'Object' error */}
        <Box
          as="select"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          w="100%"
          h="50px"
          px={3}
          fontFamily="Poppins"
          fontSize="md"
          borderRadius="8px"
          border="1px solid"
          borderColor={touched && error ? "red.500" : "gray.300"}
          outline="none"
          bg="white"
          cursor="pointer"
          appearance="none" // Removes default browser arrow if you want to add a custom one later
          _focus={{
            borderColor: "#1d27cc",
            boxShadow: "none",
          }}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Box>

        {/* Optional: Add a custom chevron icon here if appearance="none" is used */}
      </Box>

      {touched && error && (
        <Text fontSize="xs" color="red.500" fontFamily="Poppins" mt={1}>
          {error}
        </Text>
      )}
    </VStack>
  );
};

export default FormikSelect;
