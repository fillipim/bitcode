"use client";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import { ColorModeScript } from "@chakra-ui/react";
import "../globals.css";
import theme from "@/styles/theme";
import ThemeProvider from "@/providers/theme";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Flex h="100%" bgSize="cover">
            <Header />
            <Box w="100%" minH="100vh">
              {children}
            </Box>
          </Flex>
        </ThemeProvider>
      </body>
    </html>
  );
}
