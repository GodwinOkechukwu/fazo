import { VStack, Heading, Text, SimpleGrid, Box } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormikInput from "../../../components/common/formik/FormikInput";
import { STATE_OPTIONS } from "../../../utils/data";
import FormikSelect from "../../../components/common/formik/FormikSelect";
import OnboardingFooter from "../OnboardingFooter";
import { PersonalInfoSchema } from "../../../utils/validationSchemas";

const PersonalInfo = ({ onNext, prevStep, step, totalSteps }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dob: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
      }}
      validationSchema={PersonalInfoSchema}
      onSubmit={(values) => {
        console.log("Step 1 Data:", values);
        onNext(values); // Pass data to parent state if needed
      }}>
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
      }) => (
        <VStack
          as="form"
          onSubmit={handleSubmit}
          spacing={6}
          align="center"
          w="100%">
          <VStack spacing={1}>
            <Heading
              fontSize="20px"
              fontFamily="Poppins"
              color="#111827"
              fontWeight="700">
              Personal Information
            </Heading>
            <Text fontSize="14px" fontFamily="Poppins" color="#4B5563">
              Let's start with your basic details
            </Text>
          </VStack>

          <Box w="100%" mt={10}>
            <SimpleGrid
              gap="24px"
              columns={{ base: 1, md: 2 }}
              spacingX={6}
              spacingY={8}>
              <FormikInput
                name="firstName"
                label="First Name *"
                placeholder="Aurora"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName}
                touched={touched.firstName}
              />
              <FormikInput
                name="lastName"
                label="Last Name *"
                placeholder="Oladipupo"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName}
                touched={touched.lastName}
              />
              <FormikInput
                name="phoneNumber"
                label="Phone Number *"
                placeholder="07067961402"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
              />
              <FormikInput
                name="dob"
                label="Date of Birth *"
                type="date"
                placeholder="Select Date"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.dob}
                touched={touched.dob}
              />
            </SimpleGrid>

            <VStack spacing={8} mt={7} w="100%">
              <FormikInput
                name="streetAddress"
                label="Street Address *"
                placeholder="Akobo Ibadan"
                value={values.streetAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.streetAddress}
                touched={touched.streetAddress}
              />

              <SimpleGrid
                gap="24px"
                columns={{ base: 1, md: 3 }}
                spacing={6}
                w="100%">
                <FormikInput
                  name="city"
                  label="City *"
                  placeholder="Lagos"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.city}
                  touched={touched.city}
                />
                <FormikSelect
                  name="state"
                  label="State *"
                  placeholder="Select State"
                  options={STATE_OPTIONS}
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.state}
                  touched={touched.state}
                />
                <FormikInput
                  name="zipCode"
                  label="ZIP Code *"
                  placeholder="200213"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.zipCode}
                  touched={touched.zipCode}
                />
              </SimpleGrid>
            </VStack>
          </Box>
          <OnboardingFooter
            step={step}
            totalSteps={totalSteps}
            prevStep={prevStep}
          />
        </VStack>
      )}
    </Formik>
  );
};

export default PersonalInfo;
