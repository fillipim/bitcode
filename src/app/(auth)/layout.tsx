"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Flex as="main" margin="auto" w={["20%"]}>
            {children}
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
