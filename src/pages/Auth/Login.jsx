import React from "react";
import { VStack, Heading, Text, HStack, Link } from "@chakra-ui/react";
import { Formik } from "formik";
import CustomButton from "../../components/common/CustomButton";
import FormikInput from "../../components/common/formik/FormikInput";
import { LoginSchema } from "../../utils/validationSchemas";

const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={LoginSchema}
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
                Login
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="400"
                mt="20px"
                color="gray.500">
                Login to access your travelwise account
              </Text>
            </VStack>

            {/* Input Fields */}
            <VStack spacing={4} gap="6" w="100%" mt="10px">
              <FormikInput
                name="email"
                label="Email"
                placeholder="john.doe@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} // Important: touched only becomes true after onBlur
                error={errors.email}
                touched={touched.email}
              />

              <FormikInput
                name="password"
                label="Password"
                type="password"
                showPasswordToggle={true}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
            </VStack>

            {/* Actions: Remember Me & Forgot Password */}
            <HStack justify="space-between" w="100%">
              <HStack spacing={2}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                />
                <Text
                  fontSize="14px"
                  color="#313131"
                  fontFamily="Poppins"
                  fontWeight="500">
                  Remember me
                </Text>
              </HStack>

              <Link
                fontSize="14px"
                color="#2A27E0"
                fontFamily="Poppins"
                fontWeight="500">
                Forgot Password
              </Link>
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
                Login
              </CustomButton>

              <HStack justify="center" w="100%" fontSize="14px">
                <Text color="#313131" fontFamily="Poppins">
                  Don't have an account?
                </Text>
                <Link
                  color="#1d27cc"
                  fontWeight="700"
                  fontFamily="Poppins"
                  href="/email-verification">
                  Sign up
                </Link>
              </HStack>
            </VStack>
          </VStack>
        );
      }}
    </Formik>
  );
};

export default Login;
