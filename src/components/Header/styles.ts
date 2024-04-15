import { SystemStyleObject } from "@chakra-ui/react";

export const style: Record<string, SystemStyleObject> = {
  boxHeader: {
    w: { lg: "300px" },
    p: { lg: "1rem" },
    borderRight: "1px solid #c3c3c3",
    position: "relative",
    backgroundColor: "var(--chakra-colors-chakra-body-bg)",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    p: ".5rem 1rem",
    borderRadius: "10px",
    fontWeight: "500",
    fontFamily: `"Pixelify Sans", sans-serif;`,
  },
  headerBottom: {
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: "1rem",
    justifyContent: "space-between",
    w: "100%",
    alignItems: "center",
  },
};
