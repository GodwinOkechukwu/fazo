import React from "react";
import { VStack, Heading, Text, HStack, Link, Button } from "@chakra-ui/react";
import { Formik } from "formik";
import CustomButton from "../../components/common/CustomButton";
import FormikInput from "../../components/common/formik/FormikInput";
import { codeSchema } from "../../utils/validationSchemas";

const VerifyCode = () => {
  return (
    <Formik
      initialValues={{ code: "" }}
      validationSchema={codeSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        touched,
        isSubmitting,
        errors,
      }) => {
        return (
          <VStack
            as="form"
            onSubmit={handleSubmit}
            spacing={8}
            align="flex-start"
            w={{ base: "100%", md: "80%" }}
            margin="auto">
            {/* Header Section */}
            <VStack align="flex-start" mt="30px" spacing={1}>
              <Heading
                fontSize={{ base: "32px", md: "40px" }}
                fontFamily="Poppins"
                fontWeight="600"
                color="#313131">
                Verify code
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="400"
                mt="20px"
                color="gray.500">
                An authentication code has been sent to your email.
              </Text>
            </VStack>

            {/* Input Fields */}
            <VStack spacing={4} w="100%" mt="10px">
              <FormikInput
                name="code"
                label="Enter Code"
                type="password"
                placeholder="Enter your verification code"
                showPasswordToggle={true}
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.code}
                touched={touched.code}
              />
            </VStack>

            {/* Actions: Remember Me & Forgot Password */}
            <HStack justify="space-between" w="100%">
              <HStack spacing={2}>
                <Text
                  fontSize="14px"
                  color="#313131"
                  fontFamily="Poppins"
                  fontWeight="500">
                  Didn’t receive a code?
                </Text>
                <Button
                  bgColor="transparent"
                  w="10px"
                  fontSize="14px"
                  color="#2A27E0"
                  fontFamily="Poppins"
                  fontWeight="500">
                  Resend
                </Button>
              </HStack>
            </HStack>

            {/* Submit Button & Footer */}
            <VStack w="100%" spacing={5} mt="30px">
              <CustomButton
                type="submit"
                isLoading={isSubmitting}
                bg="#1d27cc"
                color="white"
                h="50px"
                borderRadius="8px"
                fontSize="14px"
                fontWeight="700">
                Verify
              </CustomButton>
            </VStack>
          </VStack>
        );
      }}
    </Formik>
  );
};

export default VerifyCode;
