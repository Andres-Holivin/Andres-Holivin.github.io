import { Box, Heading, Button, Image, Text } from "@chakra-ui/react";
import { IoArrowDown } from "react-icons/io5";
import "animate.css";
import { IconButton } from "@chakra-ui/react";
import { Link } from "react-scroll/modules";
import {Content} from "../../Content";

const HomePage= () => {
  return (
    <Box
      id="home"
      display="flex"
      alignItems="center"
      textColor="white"
      flexDir="column"
      justifyContent="space-between"
      height="100vh"
      backgroundSize="cover"
      backgroundImage="image/background.jpg"
    >
      <Box></Box>
      <Box display="flex" flexDir="row" alignItems="center">
        <Box>
          <Image
            src="image/me.jpeg"
            alt="me"
            borderRadius="2xl"
            boxSize="260px"
            marginY="35px"
          />
        </Box>
        <Box
        py="35px"
          display="flex"
          flexDir="column"
          alignItems="start"
          justifyContent="space-around"
          paddingX="80px"
          gap="4"
          h="full"
        >
          <Box display="flex" alignItems="center">
            <Text fontSize="md" fontFamily="sans-serif">
              {/* Hi, My name */}
            </Text>
            <Text fontSize="4xl" fontWeight="bold" fontFamily="sans-serif">
              Hi, I&apos;m Andres Holivin
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="start">
            <Text
              fontSize="xl"
              fontWeight="bold"
              fontFamily="sans-serif"
              textAlign="center"
            >
              Application developer &amp; Software Engineer
            </Text>
          </Box>
          <Box display="flex" columnGap="2" justifyContent="center">
            {Content.contact.map((item, key) => (
              <ItemIcon key={key} iconData={item.icon} action={item.action}/>
            ))}
          </Box>
        </Box>
      </Box>
      <div className="animate__animated animate__bounce animate__slower animate__infinite animate__delay-5s">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Box as="button" display="flex" alignItems="center" flexDir="column">
            <IoArrowDown className="animate__bounce" size="20px" />
            <Text fontSize="smaller">Scroll Down</Text>
          </Box>
        </Link>
      </div>
    </Box>
  );
};
export default HomePage;
export const ItemIcon = (props) => {
  return (
    <IconButton
      onClick={()=>{
        window.open(props.action);
      }}
      colorScheme="telegram"
      variant="ghost"
      icon={props.iconData}
      _hover={{
        transform:"scale(1.2)"
      }}
      _active={{
        bg: "#808080"
      }}
      _focus={{
        boxShadow: "0 0 0 0 transparent"
      }}
    />
  );
};
