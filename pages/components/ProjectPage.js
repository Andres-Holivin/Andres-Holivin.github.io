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
import { Content } from "../../Content";

const ProjectPage = () => {
  const icons = [
    {
      id: 1,
      title: "LisTo",
      desc: "Desc3",
      image:
        "https://appimg2.dbankcdn.com/application/screenshut5/1078/996c362d6ec34336a9a6d5984148e23f.jpg",
      icons: [
        {
          link: "https://appgallery.huawei.com/app/C105260341",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },
        {
          link: "https://github.com/holivin21/LisTo",
          icon: <Icon key={1} as={FaGithub} />,
        },
        // {
        //   link: "https://appgallery.huawei.com/app/C105260341",
        //   icon: <Icon key={1} as={IoLogoGooglePlaystore} />,
        // },
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
            {getProject(Content.project)[0]}
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
            {getProject(Content.project)[1]}
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
            image={projects[i]["image"]}
            title={projects[i]["title"]}
            desc={projects[i]["desc"]}
            iconData={projects[i]["icons"]}
          />
        )
      : content2.push(
          <CardProject
            key={i}
            image={projects[i]["image"]}
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
    <Box shadow="2xl" rounded="md" marginY="10px" w="md">
      <Box display="flex" justifyContent="center">
        <Image
          height="380px"
          fit="contain"
          src={props.image}
          roundedTop="md"
          alt="image"
        />
      </Box>
      <Box padding="20px" display="flex" flexDirection="column" gap="1">
        <Heading size="md">{props.title}</Heading>
        <Text textAlign="justify" fontSize="xl">
          {props.desc}
        </Text>
        <Box display="flex" justifyContent="end" gap="0">
          {props.iconData.map((item, key) => (
            <CustomIconButton key={key} item={item.icon} link={item.link} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
const CustomIconButton = (props) => {
  return (
    <IconButton
      onClick={(e) => {
        e.preventDefault();
        window.location.href = props.link;
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
