import {
  Stack,
  Avatar,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { IoMdPower } from "react-icons/io";

const ProfileMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton>
          <Stack direction="row" align="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Text fontWeight="bold">Alguém Leandro</Text>
              <Text fontSize="sm">By Filipe Monteiro</Text>
            </Box>
          </Stack>
        </MenuButton>
        <MenuList>
          <MenuItem>Meus cursos</MenuItem>
          <MenuDivider />
          <MenuItem>
            <Button leftIcon={<IoMdPower />} variant="unstyled">
              Sair
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default ProfileMenu;
