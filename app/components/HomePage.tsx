'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  IconButton,
  Icon,
  Button,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { portfolioContent } from '@/lib/content';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function HomePage() {
  const scrollToNext = () => {
    const element = document.querySelector('#skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      minH="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      bgGradient="linear(to-br, gray.900, purple.900, blue.900)"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgImage: "url(/image/background.jpg)",
        bgSize: 'cover',
        bgPosition: 'center',
        opacity: 0.15,
        zIndex: 0,
      }}
    >
      {/* Animated Background Elements */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        w="300px"
        h="300px"
        bg="cyan.500"
        opacity={0.1}
        filter="blur(100px)"
        borderRadius="full"
        animation="float 6s ease-in-out infinite"
      />
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        w="400px"
        h="400px"
        bg="purple.500"
        opacity={0.1}
        filter="blur(100px)"
        borderRadius="full"
        animation="float 8s ease-in-out infinite reverse"
      />

      <Container maxW="container.xl" position="relative" zIndex={2}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={12}
          align="center"
          justify="space-between"
        >
          {/* Left Content */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={8}
            flex={1}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={4}>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="cyan.400"
                  fontWeight="bold"
                  letterSpacing="wide"
                >
                  👋 Hello, I&apos;m
                </Text>
                
                <Heading
                  as="h1"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="extrabold"
                  lineHeight="1.2"
                >
                  <Text
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    bgClip="text"
                  >
                    Andres Holivin
                  </Text>
                </Heading>

                <Box h="80px" w="full">
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer',
                      2000,
                      'Mobile App Developer',
                      2000,
                      'Software Engineer',
                      2000,
                      'Problem Solver',
                      2000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    style={{
                      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                      fontWeight: 'bold',
                      background: 'linear-gradient(to right, #a78bfa, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                    }}
                    repeat={Infinity}
                  />
                </Box>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="gray.400"
                  maxW="xl"
                  lineHeight="tall"
                >
                  Passionate about creating innovative solutions with modern
                  technologies. Specialized in full-stack development, mobile apps,
                  and cloud solutions.
                </Text>
              </VStack>
            </MotionBox>

            {/* CTA Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <HStack spacing={4} flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
                <Button
                  size="lg"
                  bgGradient="linear(to-r, cyan.500, blue.600)"
                  color="white"
                  _hover={{
                    bgGradient: 'linear(to-r, cyan.600, blue.700)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)',
                  }}
                  onClick={scrollToProjects}
                  px={8}
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="cyan.500"
                  color="cyan.400"
                  _hover={{
                    bg: 'cyan.500',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  }}
                  onClick={scrollToContact}
                  px={8}
                >
                  Contact Me
                </Button>
              </HStack>
            </MotionBox>

            {/* Social Links */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
                <Text fontSize="sm" color="gray.500" fontWeight="medium">
                  CONNECT WITH ME
                </Text>
                <HStack spacing={3}>
                  {portfolioContent.contact.map((item) => (
                    <IconButton
                      key={item.action}
                      aria-label={item.label}
                      icon={<Icon as={item.iconType} boxSize={10} />}
                      size="md"
                      variant="ghost"
                      color="gray.400"
                      borderRadius="full"
                      _hover={{
                        color: 'cyan.400',
                        bg: 'whiteAlpha.200',
                        transform: 'translateY(-4px) scale(1.1)',
                      }}
                      transition="all 0.3s ease"
                      onClick={() => window.open(item.action, '_blank')}
                    />
                  ))}
                </HStack>
              </VStack>
            </MotionBox>
          </VStack>

          {/* Right Content - Profile Image */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            display="flex"
            justifyContent="center"
          >
            <Box position="relative">
              {/* Glowing Ring */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w={{ base: '320px', md: '400px' }}
                h={{ base: '320px', md: '400px' }}
                borderRadius="full"
                bg="linear-gradient(135deg, cyan.500, purple.600)"
                opacity={0.3}
                filter="blur(40px)"
                animation="pulse 3s ease-in-out infinite"
              />
              
              {/* Image Container */}
              <Box
                position="relative"
                borderRadius="full"
                overflow="hidden"
                border="4px solid"
                borderColor="cyan.500"
                boxShadow="0 0 60px rgba(6, 182, 212, 0.6)"
                w={{ base: '280px', md: '350px' }}
                h={{ base: '280px', md: '350px' }}
              >
                <Image
                  src="/image/me.jpeg"
                  alt="Andres Holivin"
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </MotionBox>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
      >
        <VStack spacing={2}>
          <IconButton
            aria-label="Scroll down"
            icon={<Icon as={FaChevronDown} />}
            variant="ghost"
            color="cyan.400"
            size="lg"
            onClick={scrollToNext}
            animation="bounce 2s infinite"
            _hover={{ color: 'cyan.300' }}
            borderRadius="full"
          />
          <Text fontSize="xs" color="gray.500" fontWeight="medium">
            Scroll Down
          </Text>
        </VStack>
      </Box>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </Box>
  );
}
