import { VStack, Heading, Text, Stack, HStack, Link } from "@chakra-ui/react";
import { Formik } from "formik";
import CustomButton from "../../components/common/CustomButton";
import FormikInput from "../../components/common/formik/FormikInput";
import { SignUpSchema } from "../../utils/validationSchemas";
const Signup = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        agree: false,
      }}
      validationSchema={SignUpSchema}
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
                Sign Up
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="400"
                mt="20px"
                color="gray.500">
                Let’s get you all set up so you can access your account.
              </Text>
            </VStack>
            {/* Input Fields */}
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={6}
              w="100%"
              mt="10px">
              <FormikInput
                name="firstName"
                label="First Name"
                placeholder="John"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName}
                touched={touched.firstName}
              />

              <FormikInput
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName}
                touched={touched.lastName}
              />
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={6}
              gap="6"
              w="100%"
              mt="10px">
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
                name="phoneNumber"
                label="Phone Number"
                type="number"
                showPasswordToggle={true}
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
              />
            </Stack>
            <VStack spacing={4} gap="6" w="100%" mt="10px">
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

              <FormikInput
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                showPasswordToggle={true}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
              />
            </VStack>
            {/* Actions: Remember Me & Forgot Password */}
            <HStack justify="space-between" w="100%">
              <HStack spacing={2}>
                <input
                  type="checkbox"
                  name="agree"
                  checked={values.agree}
                  onChange={handleChange}
                />
                <Text
                  fontSize="14px"
                  color="#313131"
                  fontFamily="Poppins"
                  fontWeight="500">
                  I agree to all the
                  <Link color="#2A27E0" px="3px" fontWeight="500">
                    Terms
                  </Link>
                  and
                  <Link color="#2A27E0" px="3px" fontWeight="500">
                    Privacy Policies
                  </Link>
                </Text>
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
                Create Account
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
                  Log in
                </Link>
              </HStack>
            </VStack>
          </VStack>
        );
      }}
    </Formik>
  );
};

export default Signup;
