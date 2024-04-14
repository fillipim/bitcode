"use client";

import {
  Flex,
  Box,
  Text,
  Center,
  Stack,
  Divider,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Input } from "@chakra-ui/react";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const styles = {
    formBox: {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      p: "1rem",
      w: "100%",
      borderRadius: "10px",
      m: "10rem auto",
    },
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Box {...styles.formBox}>
      <Center>
        <Image src="/logo.png" alt="Logo Bitcode" width={200} height={100} />
      </Center>
      <Stack>
        <div>
          <Text>Email:</Text>
          <Input placeholder="email@example" size="md" />
        </div>
        <div>
          <Text>Senha:</Text>
          <Input placeholder="••••••" size="md" type="password" />
        </div>
        <Button bg="#28d9cc" color="white">
          Entrar
        </Button>
        <Divider h="2px" />
        <Text>
          Esqueceu sua senha?{" "}
          <ChakraLink as={Link} color="#28d9cc" href="/">
            Recupere aqui
          </ChakraLink>
        </Text>
      </Stack>
    </Box>
  );
}
