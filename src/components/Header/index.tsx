import { Box, Button, Flex, useColorMode, Switch } from "@chakra-ui/react";
import Image from "next/image";
import { style } from "./styles";
import { menus } from "@/utils/menus";
import Link from "../Link";
import { usePathname } from "next/navigation";
import { IoMdPower } from "react-icons/io";

const Header = () => {
  const pathname = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();

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
              color: pathname === menu.path ? "#28d9cc" : "",
              backgroundColor:
                pathname === menu.path ? "#47c2aa20" : "transparent",
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
