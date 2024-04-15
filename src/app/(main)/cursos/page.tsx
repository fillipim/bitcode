import PageHeader from "@/components/PageHeader";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { style } from "./style";
import CourseCard from "@/components/CourseCard";

export default function Courses() {
  return (
    <Box w="100%">
      <PageHeader title="Cursos" />
      <Flex sx={style.currentCourse}>
        <Box w="50px" h="50px" bg="red.300"></Box>
        <Box>
          <Text as="b" display="block">
            React JS
          </Text>
          <Text fontSize="sm" as="sup">
            By Filipe Monteiro
          </Text>
        </Box>
      </Flex>
      <Text sx={style.updateText}>
        Atualizado em 14/04/2024 às 10:32 • 10 itens
      </Text>
      <Grid sx={style.courseList}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Grid>
    </Box>
  );
}
