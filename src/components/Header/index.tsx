import { Box, Button, Flex, useColorMode, Switch } from "@chakra-ui/react";
import Image from "next/image";
import { style } from "./styles";
import { menus } from "@/utils/menus";
import Link from "../Link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { IoMdPower } from "react-icons/io";

const Header = () => {
  const pathname = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();

  const itemSchemeColor = useCallback(
    (path: string) => {
      localStorage.setItem("@theme", colorMode);
      if (colorMode === "dark") {
        return {
          color: pathname === path ? "#28d9cc" : "#fff",
          backgroundColor: pathname === path ? "#ffffff22" : "transparent",
        };
      }
      return {
        color: pathname === path ? "#28d9cc" : "#252525",
        backgroundColor: pathname === path ? "#e4f8f7" : "transparent",
      };
    },
    [colorMode, pathname]
  );

  return (
    <Box sx={style.boxHeader}>
      <Flex>
        <Image src="/logo.png" alt="Logo Bitcode" width={150} height={100} />
      </Flex>
      <Box>
        {menus.map((menu) => (
          <Link
            key={menu.label}
            style={{
              ...style.menuItem,
              ...itemSchemeColor(menu.path),
            }}
            href={menu.path}
          >
            <menu.icon fontSize="1.2rem" />
            {menu.label}
          </Link>
        ))}
      </Box>
      <Flex sx={style.headerBottom}>
        <Button leftIcon={<IoMdPower />} variant="unstyled">
          Sair
        </Button>
        <Flex flexDir="column" align="center">
          <Switch onChange={toggleColorMode} />
          <small color={colorMode === "dark" ? "#fff" : "#000"}>
            {colorMode} mode
          </small>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
