import { Box, Button, HStack } from "@chakra-ui/react";

const OnboardingFooter = ({ step, totalSteps, prevStep }) => {
  return (
    <HStack
      w="100%"
      justify="space-between"
      mt={10}
      pt={6}
      borderTop="1px solid"
      borderColor="#E5E7EB">
      <Button
        variant="ghost"
        color="gray.400"
        onClick={prevStep}
        isDisabled={step === 1}
        _hover={{ bg: "transparent", color: "gray.600" }}>
        Back
      </Button>

      {/* Step Dots indicator from Figma */}
      <HStack spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Box
            key={i}
            w={step === i ? "8px" : "6px"}
            h={step === i ? "8px" : "6px"}
            borderRadius="full"
            bg={step === i ? "#2563EB" : "gray.200"}
          />
        ))}
      </HStack>

      <Button
        type="submit"
        bg="#2563EB"
        color="white"
        px={10}
        _hover={{ bg: "#151ca3" }}>
        {step === totalSteps ? "Finish" : "Next"}
      </Button>
    </HStack>
  );
};

export default OnboardingFooter;
