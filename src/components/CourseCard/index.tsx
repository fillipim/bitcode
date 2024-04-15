import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
  Image,
  GridItem,
} from "@chakra-ui/react";
import { style } from "./style";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { TbClock2 } from "react-icons/tb";

const CourseCard = () => {
  return (
    <Card as={GridItem} cursor="pointer" borderRadius="20px">
      <CardBody>
        <Image
          src="https://hermes.dio.me/articles/cover/8e48f68d-e4ed-4522-881c-75d282da5266.png"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          h="200px"
          w="100%"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">React Js</Heading>
          <Text noOfLines={3}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter p="1rem 1.25rem">
        <Text sx={style.updateText}>
          <HiMiniSquares2X2 /> Básico • <TbClock2 /> 120 horas
        </Text>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
