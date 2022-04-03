import { Box, Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from "react-scroll/modules";
import { useState,useEffect } from 'react'

const Nav=() =>{
  const [scroll, setScroll] = useState();
  const [windowHeight, setWindowHeight] = useState();
  const handleScroll = (e) => {
    console.log(e);
    setScroll(parseInt(window.scrollY));
    setWindowHeight(2218 + parseInt(window.innerHeight) - 60);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Box
      style={{
        // backgroundColor:
        //   scroll > windowHeight ? "rgb(0, 0, 0,1)" : "transparent",
        backgroundColor:"rgb(60, 60, 60,0.3)",
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease"
      }}
      position="fixed"
      zIndex="10"
      width="100vw"
      textColor="white"
      shadow="xl"
    >
      <Grid
        templateColumns="repeat(2,1fr)"
        paddingX="25px"
        paddingY="5px"
        justifyContent="center"
      >
        <GridItem textAlign="center">
          <Image
            src="image/logo.svg"
            width="150px"
            height="50px"
            objectFit="fill"
            alt="image"
          />
        </GridItem>
        <GridItem
          textAlign="center"
          columnGap={4}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button
              colorScheme="white"
              variant="link"
              _focus={{
                boxShadow: "0 0 0 0 transparent"
              }}
            >
              Home
            </Button>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button
              colorScheme="white"
              variant="link"
              _focus={{
                boxShadow: "0 0 0 0 transparent"
              }}
            >
              About
            </Button>
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button
              colorScheme="white"
              variant="link"
              _focus={{
                boxShadow: "0 0 0 0 transparent"
              }}
            >
              Project
            </Button>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button
              colorScheme="white"
              variant="link"
              _focus={{
                boxShadow: "0 0 0 0 transparent"
              }}
            >
              Contact
            </Button>
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
}
export default Nav;
