import { SystemStyleObject } from "@chakra-ui/react";

export const style: Record<string, SystemStyleObject> = {
  currentCourse: {
    p: "2rem 0",
    m: "0 2rem",
    borderBottom: "1px dashed #d8d8d8",
    gap: "1rem",
  },
  updateText: {
    color: "var(--chakra-colors-chakra-subtle-text)",
    m: "0 2rem",
    fontSize: ".75rem",
    borderBottom: "1px dashed #d8d8d8",
    p: "1rem 0",
  },
  courseList: {
    w: "100%",
    p: "2rem",
    gap: "24px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
};
