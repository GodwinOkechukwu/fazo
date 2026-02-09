import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Progress,
  HStack,
  Button,
} from "@chakra-ui/react";
import PersonalInfo from "./steps/PersonalInfo";
import ProfBackground from "./steps/ProfBackground";
import BusinessInfo from "./steps/BusinessInfo";
import DocumentUpload from "./steps/DocumentUpload";
import BankingInfo from "./steps/BankingInfo";
import FinalStep from "./steps/FinalStep";

// Import other steps: Professional, Business, Documents, Banking, Agreement

const AgentOnboarding = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  // Calculate percentage for the progress bar
  const progressPercent = (step / totalSteps) * 100;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo onNext={nextStep} step={step} totalSteps={totalSteps} />
        );
      case 2:
        return <ProfBackground onNext={nextStep} />;
      case 3:
        return <BusinessInfo onNext={nextStep} />;
      case 4:
        return <DocumentUpload onNext={nextStep} />;
      case 5:
        return <BankingInfo onNext={nextStep} />;
      case 6:
        return <FinalStep />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <VStack spacing={6} w={{ base: "90%", md: "70%" }} align="center">
      {/* Top Header Section */}
      <VStack spacing={2}>
        <Heading
          fontSize="24px"
          fontFamily="Poppins"
          fontWeight="700"
          color="#111827">
          Agent Onboarding
        </Heading>
        <Text fontSize="14px" fontFamily="Poppins" color="#4B5563">
          Complete your profile to start listing properties
        </Text>
      </VStack>

      <VStack w="100%" spacing={3} px={4}>
        <HStack w="100%" justify="space-between">
          <Text
            fontSize="xs"
            fontWeight="600"
            fontFamily="Poppins"
            color="gray.500">
            Step {step} of {totalSteps}
          </Text>
          <Text
            fontSize="xs"
            fontWeight="600"
            fontFamily="Poppins"
            color="gray.500">
            {Math.round(progressPercent)}% Complete
          </Text>
        </HStack>
        {/* Custom Progress Bar */}
        <Box
          w="100%"
          h="6px"
          bg="gray.100"
          borderRadius="full"
          position="relative"
          overflow="hidden">
          <Box
            position="absolute"
            top={0}
            left={0}
            h="100%"
            w={`${progressPercent}%`} // Dynamically updates based on your state
            bg="#2563EB" // Your Travelwise Blue
            transition="width 0.3s ease-in-out"
            borderRadius="full"
          />
        </Box>

        <HStack w="100%" justify="space-between" flexWrap="wrap" pt={2}>
          {[
            "Personal",
            "Professional",
            "Business",
            "Documents",
            "Banking",
            "Agreement",
          ].map((label, index) => (
            <Text
              key={label}
              fontSize="10px"
              fontWeight="600"
              fontFamily="Poppins"
              color={step >= index + 1 ? "#2563EB" : "gray.400"}
              borderBottom={step === index + 1 ? "2px solid #2563EB" : "none"}
              pb={1}>
              {label}
            </Text>
          ))}
        </HStack>
      </VStack>

      {/* Dynamic Content Area */}
      <Box
        w="100%"
        bg="white"
        borderRadius="16px"
        p={8}
        border="1px solid"
        borderColor="gray.100"
        shadow="sm">
        {renderStep()}
      </Box>

      <Text fontSize="xs" color="gray.400">
        Need help? Contact our agent support team at{" "}
        <Text as="span" color="#1d27cc">
          agents@fazo.com
        </Text>
      </Text>
    </VStack>
  );
};

export default AgentOnboarding;
