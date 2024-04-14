import { SystemStyleObject, Link as ChakraLink } from "@chakra-ui/react";
import { LinkProps } from "next/link";
import * as NextLink from "next/link";
import { FC, ReactNode } from "react";

interface CombinedLinkProps extends LinkProps {
  style?: SystemStyleObject;
  children: ReactNode;
}

const Link: FC<CombinedLinkProps> = ({ href, children, style }) => {
  return (
    <ChakraLink as={NextLink.default} href={href as string} sx={style}>
      {children}
    </ChakraLink>
  );
};

export default Link;
