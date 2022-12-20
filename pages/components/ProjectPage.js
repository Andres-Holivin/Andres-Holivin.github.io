import {
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Image,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { FaGlobeAsia, FaGithub } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const ProjectPage = () => {
  const icons = [
    {
      id: 1,
      title: "ToList",
      desc: "Desc1",
      icons: [
        <Icon key={1} as={FaGlobeAsia} />,
        <Icon key={1} as={FaGithub} />,
        <Icon key={1} as={IoLogoGooglePlaystore} />,
      ],
    },
    {
      id: 2,
      title: "hello2",
      desc: "Desc2",
      icons: [
        <Icon key={1} as={FaGlobeAsia} />,
        <Icon key={1} as={FaGithub} />,
        <Icon key={1} as={IoLogoGooglePlaystore} />,
      ],
    },
    {
      id: 3,
      title: "hello3",
      desc: "Desc3",
      icons: [
        {
          link: "https://appgallery.huawei.com/app/C105260341",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },
        {
          link: "https://appgallery.huawei.com/app/C105260341",
          icon: <Icon key={1} as={FaGithub} />,
        },
        {
          link: "https://appgallery.huawei.com/app/C105260341",
          icon: <Icon key={1} as={IoLogoGooglePlaystore} />,
        },
      ],
    },
  ];
  return (
    <Box
      id="project"
      minH="100vh"
      backgroundColor=""
      paddingTop="80px"
      paddingX="5vw"
    >
      <Grid templateColumns="repeat(2,1fr)">
        <GridItem
          display="flex"
          justifyContent="start"
          flexDirection="column"
          alignItems="end"
        >
          <Box
            display="flex"
            flexDirection="column"
            maxW="fit-content"
            marginRight="40px"
          >
            <Box
              display="flex"
              flexDirection="column"
              gap="4"
              maxW="450px"
              paddingY="15px"
            >
              <Heading size="md">Project Show Case</Heading>
              <Text fontSize="xl">
                Take a look at the products we&apos;ve recently finished and see
                case studies for the full story on how we&apos;ve helped our
                clients achieve success in the digital world.
              </Text>
            </Box>
            {getProject(icons)[0]}
          </Box>
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="start"
          flexDirection="column"
          alignItems="start"
        >
          <Box
            // paddingY="80px"
            display="flex"
            flexDirection="column"
            maxW="fit-content"
            marginLeft="40px"
          >
            {getProject(icons)[1]}
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
      ? content1.push(
          <CardProject
            key={i}
            title={projects[i]["title"]}
            desc={projects[i]["desc"]}
            iconData={projects[i]["icons"]}
          />
        )
      : content2.push(
          <CardProject
            key={i}
            title={projects[i]["title"]}
            desc={projects[i]["desc"]}
            iconData={projects[i]["icons"]}
          />
        );
  }
  return [content1, content2];
};
const CardProject = (props) => {
  return (
    <Box shadow="xl" rounded="md" marginY="10px">
      <Image
        width="450px"
        height="380px"
        src="image/itBinus.jpeg"
        roundedTop="md"
        alt="image"
      />
      <Box padding="20px" display="flex" flexDirection="column" gap="1">
        <Heading size="md">{props.title}</Heading>
        <Text fontSize="xl">{props.desc}</Text>
        <Box display="flex" justifyContent="end" gap="0">
          {props.iconData.map((item, key) => (
            <CustomIconButton key={key} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
const CustomIconButton = (props) => {
  return (
    <IconButton
      onclick={() => {
        e.preventDefault();
        window.location.href = "http://google.com";
      }}
      // key={key}
      colorScheme="black"
      variant="ghost"
      icon={props.item}
      _hover={{
        bg: "#F0F0F0",
      }}
      _active={{
        bg: "#E0E0E0",
      }}
      _focus={{
        boxShadow: "0 0 0 0 transparent",
      }}
    />
  );
};
export default ProjectPage;
