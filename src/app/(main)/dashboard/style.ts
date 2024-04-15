import { SystemStyleObject } from "@chakra-ui/react";

export const style: Record<string, SystemStyleObject> = {
  smCard: {
    borderRadius: "10px",
  },
  smCardBody: {
    display: "flex",
    alignItems: "center",
    flexDir: "row",
    gap: "1rem",
  },
  smCardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  iconCard: {
    w: "50px",
    h: "50px",
    borderRadius: "10px",
    fontSize: "1.3rem",
  },
  currentCourseBox: {
    padding: "1rem",
    display: "flex",
    flexDir: "column",
    gap: "1rem",
  },
  courseList: {
    w: "100%",
    gap: "24px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
};
