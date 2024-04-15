import { SystemStyleObject } from "@chakra-ui/react";

export const style: Record<string, SystemStyleObject> = {
  pageHeaderBox: {
    height: "70px",
    p: "1rem 2rem",
    w: "100%",
    backgroundColor: "var(--chakra-colors-chakra-body-bg)",
    borderBottom: "1px solid #d8d8d8",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
  },
  currentCourse: {
    p: "2rem 0",
  },
};
