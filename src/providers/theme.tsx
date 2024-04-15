"use client";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "ligth",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

theme.fonts.heading = "'Poppins', sans-serif";
theme.fonts.body = "'Poppins', sans-serif";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
