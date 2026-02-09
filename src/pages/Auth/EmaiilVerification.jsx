import { VStack, Box, Text, HStack, Link } from "@chakra-ui/react";
import { Formik } from "formik";
import CustomButton from "../../components/common/CustomButton";
import FormikInput from "../../components/common/formik/FormikInput";
import { emailSchema } from "../../utils/validationSchemas";
import logo from "../../assets/logo.png";

const EmaiilVerification = () => {
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
    <Formik
      initialValues={{ email: "" }}
      validationSchema={emailSchema}
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
          <>
            <VStack spacing={0}>
              <FazoLogo />
            </VStack>
            <VStack
              as="form"
              onSubmit={handleSubmit}
              spacing={8}
              align="flex-start"
              w={{ base: "100%", md: "80%" }}
              margin="auto">
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
              </VStack>

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
                  Sign Up
                </CustomButton>

                <HStack justify="center" w="100%" fontSize="14px">
                  <Text color="#313131" fontFamily="Poppins">
                    Already have an account?
                  </Text>
                  <Link
                    color="#1d27cc"
                    fontWeight="700"
                    fontFamily="Poppins"
                    href="/login">
                    Sign in
                  </Link>
                </HStack>
              </VStack>
            </VStack>
          </>
        );
      }}
    </Formik>
  );
};

export default EmaiilVerification;
