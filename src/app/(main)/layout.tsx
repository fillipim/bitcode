"use client";
import { Inter } from "next/font/google";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import { ColorModeScript } from "@chakra-ui/react";
import "../globals.css";
import theme from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, "h-screen")}>
        <ChakraProvider>
          <Flex h="100%" bgSize="cover">
            <Box
              bgImage={"/animatedBg.gif"}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                opacity: "0.2",
                zIndex: "-1",
              }}
            />
            <Header />
            {children}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
