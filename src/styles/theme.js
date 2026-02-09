import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

export const system = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: `'Poppins', sans-serif`, // Used for <Heading>
        body: `'Ubuntu', sans-serif`, // Used for <Text>, <Input>, <Link>
        accent: `'Open Sans', sans-serif`, // A custom key you can use anywhere
      },
    },
  },
});

export const customTheme = createSystem(defaultConfig, system);
