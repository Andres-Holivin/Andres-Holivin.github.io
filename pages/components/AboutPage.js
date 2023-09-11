import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { FaArrowCircleRight, FaArrowCircleLeft,FaHandPointDown } from "react-icons/fa";
import {Content} from "../../Content";
import React, { useState, useEffect} from "react";
import { ItemIcon } from "./HomePage";
const AboutPage =() => {
  const [scroll, setScroll] = useState({
    left: false,
    right: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = React.createRef();
  const [image, setImage] = useState();
  const refScroll = (scroll, interval, distance) => {
    let scrollAmount = 0;
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
      sx={{ "background-image": "linear-gradient(black ,black,gray,white)" }}
      // bgGradient="linear(black 10%,gray.900 30%,gray.600,gray.300,white )"
    >
      <Box display="flex" flexDir="column" alignItems="center">
        <Heading size="lg" textAlign="center">
          Description About Me
        </Heading>
        <Box width="650px" marginY="20px">
          <Text fontSize="xl" textAlign="justify">
            &nbsp; Hello my is name Andres Holivin. I&apos;m anthusias with software
            and application developer. I&apos;m intrested the new technology and I&apos;m
            always looking for new challenges. I&apos;m passionate about back-end,
            mobile, devops, and research the new technology to implement in a
            application.
          </Text>      
        </Box>
        <br/>
          <Box display="flex" gap={4} alignItems="center" bg="blue.600" px="4" py="2" borderRadius="25">
            <Text fontSize="xl" textAlign="justify">
              For More Detail about My Experiences, Please cek my Linkedin
            </Text>
            <Box position="relative" >
              <Box position="absolute" top="-6" right="2" className="animate__animated animate__bounce animate__slower animate__infinite animate__delay-5s">
                <Icon key={4} as={FaHandPointDown} color="white" boxSize={6} />
              </Box>
              <ItemIcon 
              iconData={Content.contact.find((x)=>x.action.includes("linkedin")).icon} 
              action={Content.contact.find((x)=>x.action.includes("linkedin")).action}
              />
            </Box>
          </Box>
      </Box>
      {/* <Box justifySelf="start">
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
          {Content.experience.map((item, key) => (
            <Flex key={key} padding="0px" gap="15px" justifyContent="center">
              <Box>
                <Image
                  src={item.image}
                  width="150px"
                  height="150px"
                  objectFit="contain"
                  borderRadius="xl"
                  alt="image"
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
              onClick={() => refScroll(-150, 80, 300)}
              isDisabled={scroll.left}
            />
            <IconButton
              icon={<Icon as={FaArrowCircleRight} color="" boxSize={8} />}
              background="transparent"
              _hover={{ bg: "#454545" }}
              _active={{ bg: "#808080" }}
              _focus={{ boxShadow: "0 0 0 0 transparent" }}
              onClick={() => refScroll(150, 80, 300)}
              isDisabled={scroll.right}
            />
          </Box>
        </Box>
        <Box maxW="full" ref={ref} overflow="hidden" marginY="20px">
          <Box display="flex" gap="6" w="max-content" paddingBottom="10px">
            {Content.certificat.map((item, key) => (
              <Box
                key={key}
                as="button"
                onClick={() => {
                  setImage(item.photo);
                  onOpen();
                }}
              >
                <Image
                  // as="button"
                  rounded="md"
                  w="420px"
                  h="300px"
                  src={item.photo}
                  alt="image"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(2px)" />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: "0 0 0 0 transparent" }} />
          <ModalBody>
            <Image rounded="md" w="full" h="75vh" src={image} alt="image" />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent> */}
      {/* </Modal> */}
    </Box>
  );
};

export default AboutPage;
