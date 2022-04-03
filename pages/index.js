import { Box, Button, ChakraProvider, Grid, GridItem, Image, Text} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import Head from 'next/head'
import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';
import ProjectPage from './components/ProjectPage.js';
import { useEffect } from 'react/cjs/react.development';

export default function Home() {
  return (    
    <ChakraProvider>
      <div className="container">
        <style global jsx>{`
          body{
            margin:0;
            padding:0;
          }
        `}</style>
        <Nav/>
        <HomePage/>
        <AboutPage/>
        <ProjectPage/>
        <ContactPage/>
      </div>
    </ChakraProvider>
  )
}
