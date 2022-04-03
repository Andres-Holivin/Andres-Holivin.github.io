import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Image,
  Text
} from "@chakra-ui/react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import data from "../content";
import React, { useState, useEffect } from "react";
export default () => {
  const [scroll, setScroll] = useState({
    left: false,
    right: false
  });
  const ref = React.createRef();
  console.log(ref);
  useEffect(() => {
    return console.log("click");
  }, []);
  const refScroll = (scroll, interval, distance) => {
    let scrollAmount = 0;
    console.log(ref.current.scrollLeft);
    // if (ref.current.scrollLeft === ref.current.scrollWidth) {
    //   setScroll({ left: false, right: true });
    // } else if (ref.current.scrollLeft === 0) {
    //   setScroll({ left: true, right: false });
    // } else {
    //   setScroll({ left: false, right: false });
    // }
    // if (ref.current.scrollLeft === 0) {
    //   setScroll({ left: true, right: false });
    //   console.log(ref.current.scrollLeft);
    // }
    const sliderTime = setInterval(() => {
      ref.current.scrollLeft += scroll;
      scrollAmount += Math.abs(scroll);
      if (scrollAmount >= distance) clearInterval(sliderTime);
    }, interval);
  };
  return (
    <Box
      style={{ position: "relative" }}
      id="about"
      minH="100vh"
      textColor="white"
      justifyContent="center"
      flexDir="column"
      display="flex"
      paddingTop="100px"
      bgGradient="linear(black 10%,gray.900 30%,gray.600,gray.300,white )"
    >
      <Box display="flex" flexDir="column" alignItems="center">
        <Heading size="lg" textAlign="center">
          Description About Me
        </Heading>
        <Box width="650px" marginY="20px">
          <Text fontSize="xl" textAlign="justify">
            &nbsp; Hello my is name Andres Holivin. I'm anthusias with software
            and application developer. I'm intrested the new technology and I'm
            always looking for new challenges. I'm passionate about back-end,
            mobile, devops, and research the new technology to implement in a
            application.
          </Text>
        </Box>
      </Box>
      <Box justifySelf="start">
        <Heading textAlign="center" size="md" marginBottom="30px">
          My Experience
        </Heading>
        <Grid
          width="full"
          height="fit-content"
          gap="6"
          direction="column"
          templateColumns="repeat(2,1fr)"
          paddingX="10vw"
        >
          {data.experience.map((item, key) => (
            <Flex key={key} padding="0px" gap="15px" justifyContent="center">
              <Box>
                <Image
                  src={item.image}
                  width="150px"
                  height="150px"
                  objectFit="contain"
                  borderRadius="xl"
                />
              </Box>
              <Box
                display="flex"
                flexDir="column"
                alignItems="start"
                justifyContent="center"
                paddingY="15px"
                textColor="white"
              >
                <Heading size="sm">{item.title}</Heading>
                <Text>{item.company}</Text>
                <Text>
                  {item.start} - {item.end}
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>
      <Box marginX="50px" marginY="35px">
        <Box display="flex" justifyContent="space-between">
          <Heading size="md">Certifications</Heading>
          <Box display="flex" alignItems="center" gap="2">
            <IconButton
              icon={<Icon as={FaArrowCircleLeft} color="" boxSize={8} />}
              background="transparent"
              _hover={{ bg: "#454545" }}
              _active={{ bg: "#808080" }}
              _focus={{ boxShadow: "0 0 0 0 transparent" }}
              onClick={() => refScroll(-25, 30, 100)}
              isDisabled={scroll.left}
            />
            <IconButton
              icon={<Icon as={FaArrowCircleRight} color="" boxSize={8} />}
              background="transparent"
              _hover={{ bg: "#454545" }}
              _active={{ bg: "#808080" }}
              _focus={{ boxShadow: "0 0 0 0 transparent" }}
              onClick={() => refScroll(25, 30, 100)}
              isDisabled={scroll.right}
            />
          </Box>
        </Box>
        <Box maxW="full" ref={ref} overflow="hidden" marginY="20px">
          <Box display="flex" gap="6" w="max-content">
            {data.certificat.map((item, key) => (
              <Box key={key}>
                <Image
                  rounded="md"
                  w="420px"
                  h="300px"
                  src="image/itBinus.jpeg"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
