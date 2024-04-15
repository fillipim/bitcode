import PageHeader from "@/components/PageHeader";
import {
  Center,
  Card,
  Grid,
  GridItem,
  Box,
  Text,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { style } from "./style";
import { FaGraduationCap } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { PiCertificateFill } from "react-icons/pi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import PerformaceCard from "@/components/PerformanceCard";
import CourseCard from "@/components/CourseCard";

export default function DashBoard() {
  return (
    <>
      <PageHeader title="olá, Fulano" />
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(3, 1fr)"
        h="500px"
        p="2rem"
        gap="1rem"
      >
        <GridItem as={Card} sx={style.smCard} colSpan={1} rowSpan={1}>
          <CardBody sx={style.smCardBody}>
            <Center
              sx={style.iconCard}
              bg="#30c0cf"
              boxShadow="rgba(48, 192, 207, 0.2) 0px 8px 24px;"
            >
              <FaGraduationCap />
            </Center>
            <Box>
              <Text fontWeight="bold">Turma tal</Text>
              <Text fontSize="sm">Professor Filipe Monteiro</Text>
            </Box>
          </CardBody>
          <Divider m="0 1rem" w="" />
          <CardFooter sx={style.smCardFooter} p=".75rem var(--card-padding);">
            Visualizar <HiOutlineArrowLongRight />
          </CardFooter>
        </GridItem>
        <GridItem as={Card} sx={style.smCard} colSpan={1} rowSpan={1}>
          <CardBody sx={style.smCardBody}>
            <Center
              sx={style.iconCard}
              bg="#cf9a30"
              boxShadow="rgba(207, 165, 48, 0.2) 0px 8px 24px;"
            >
              <VscGraph />
            </Center>
            <Box>
              <Text fontWeight="bold">60</Text>
              <Text fontSize="sm">Media Total</Text>
            </Box>
          </CardBody>
          <Divider m="0 1rem" w="" />
          <CardFooter sx={style.smCardFooter} p=".75rem var(--card-padding);">
            Visualizar <HiOutlineArrowLongRight />
          </CardFooter>
        </GridItem>
        <GridItem as={Card} sx={style.smCard} colSpan={1} rowSpan={1}>
          <CardBody sx={style.smCardBody}>
            <Center
              sx={style.iconCard}
              bg="#cf3030"
              boxShadow="rgba(207, 48, 48, 0.2) 0px 8px 24px;"
            >
              <PiCertificateFill />
            </Center>
            <Box>
              <Text fontWeight="bold">Certificados</Text>
              <Text fontSize="sm">curso tal</Text>
            </Box>
          </CardBody>
          <Divider m="0 1rem" w="" />
          <CardFooter sx={style.smCardFooter} p=".75rem var(--card-padding);">
            Visualizar <HiOutlineArrowLongRight />
          </CardFooter>
        </GridItem>
        <PerformaceCard />
        <GridItem as={Card} colSpan={3} rowSpan={2} sx={style.currentCourseBox}>
          <Heading as="h2" fontSize="md" fontWeight="500">
            Curso Atual
          </Heading>
          <Heading>O Curso</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui
            neque laborum voluptatibus natus deserunt adipisci, ratione
            doloremque molestias enim magni, atque repellendus eius ex quibusdam
            vero commodi facilis incidunt!
          </Text>
        </GridItem>
      </Grid>
      <Box p="0 2rem">
        <Heading as="h2" fontSize="md" fontWeight="500" pb="2rem">
          Acessado recentemente
        </Heading>
        <Grid sx={style.courseList}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Grid>
      </Box>
    </>
  );
}
