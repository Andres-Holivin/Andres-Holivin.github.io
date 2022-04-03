import {
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Image,
  Icon
} from "@chakra-ui/react";
import { FaGlobeAsia, FaGithub } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default () => {
  const i = [1, 2, 3, 4, 5];
  return (
    <Box id="project" minH="100vh" backgroundColor="">
      <Grid templateColumns="repeat(2,1fr)">
        <GridItem
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="end"
        >
          <Box
            paddingY="80px"
            display="flex"
            flexDirection="column"
            maxW="fit-content"
            marginRight="40px"
          >
            <Box display="flex" flexDirection="column" gap="4">
              <Heading size="md">Project ShowCase</Heading>
              <Text fontSize="xl">(xl) In love with React & Next</Text>
            </Box>
            {getProject(i)[0]}
          </Box>
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="start"
        >
          <Box
            paddingY="80px"
            display="flex"
            flexDirection="column"
            maxW="fit-content"
            marginLeft="40px"
          >
            {getProject(i)[0]}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
const getProject = (projects) => {
  let content1 = [];
  let content2 = [];
  for (let i = 0; i < projects.length; i++) {
    i % 2 === 0
      ? content1.push(<CardProject key={i} />)
      : content2.push(<CardProject key={i} />);
  }
  return [content1, content2];
};
const CardProject = () => {
  return (
    <Box shadow="xl" rounded="md" marginY="10px">
      <Image
        width="450px"
        height="380px"
        src="image/itBinus.jpeg"
        roundedTop="md"
      />
      <Box padding="20px" display="flex" flexDirection="column" gap="2">
        <Heading size="md">Project ShowCase</Heading>
        <Text>hello</Text>
        <Text fontSize="xl">(xl) In love with React & Next</Text>
        <Box>
          <Icon as={FaGlobeAsia} />
          <Icon as={IoLogoGooglePlaystore} />
          <Icon as={FaGithub} />
        </Box>
      </Box>
    </Box>
  );
};
