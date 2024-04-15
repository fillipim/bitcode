import {
  Box,
  Flex,
  Heading,
  Stack,
  Divider,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { style } from "./style";
import ProfileMenu from "../ProfileMenu";

export interface PageHeaderProps {
  title: string;
  search?: boolean;
}

const PageHeader = ({ title, search }: PageHeaderProps) => {
  return (
    <Flex sx={style.pageHeaderBox}>
      <Heading lineHeight={1} sx={style.title} size="lg">
        {title}
      </Heading>
      <Stack direction="row" h="20px" align="center">
        <CiSearch fontSize="1.5rem" />
        <CiBellOn fontSize="1.5rem" />
        <Divider orientation="vertical" />
        <ProfileMenu />
      </Stack>
    </Flex>
  );
};

export default PageHeader;
