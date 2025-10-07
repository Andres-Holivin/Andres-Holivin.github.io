'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Button,
  Icon,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { portfolioContent } from '@/lib/content';

const MotionBox = motion(Box);

export default function AboutPage() {
  const linkedinContact = portfolioContent.contact.find((c) =>
    c.action.includes('linkedin')
  );

  return (
    <Box
      id="about"
      minH="100vh"
      bgGradient="linear(to-b, gray.800, gray.900)"
      py={20}
    >
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* About Section */}
          <VStack spacing={8} textAlign="center" maxW="4xl">
            <Heading 
              size="2xl" 
              bgGradient="linear(to-r, cyan.400, blue.500)" 
              bgClip="text"
              fontWeight="extrabold"
            >
              About Me
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.300" lineHeight="tall">
              I&apos;m a passionate software engineer with expertise in full-stack development,
              mobile applications, and cloud solutions. I thrive on solving complex problems
              and building innovative solutions that make a difference.
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400" lineHeight="tall">
              Currently pursuing my Bachelor&apos;s degree at Bina Nusantara University while
              actively contributing to various projects as a programmer in the IT Division.
              I&apos;m always eager to learn new technologies and collaborate on exciting projects.
            </Text>

            {linkedinContact && (
              <Button
                size="lg"
                leftIcon={<Icon as={FaLinkedin} />}
                bgGradient="linear(to-r, blue.500, blue.600)"
                color="white"
                _hover={{
                  bgGradient: 'linear(to-r, blue.600, blue.700)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                }}
                onClick={() => window.open(linkedinContact.action, '_blank')}
              >
                Connect on LinkedIn
              </Button>
            )}
          </VStack>

          {/* Experience Timeline */}
          <VStack spacing={8} w="full">
            <Heading 
              size="xl" 
              textAlign="center"
              bgGradient="linear(to-r, purple.400, pink.500)" 
              bgClip="text"
              fontWeight="bold"
            >
              Experience & Education Timeline
            </Heading>
            
            <Box w="full" position="relative">
              {/* Timeline Line */}
              <Box
                position="absolute"
                left={{ base: '20px', md: '50%' }}
                top="0"
                bottom="0"
                w="2px"
                bg="cyan.500"
                opacity={0.3}
                display={{ base: 'block', md: 'block' }}
              />

              <VStack spacing={12} align="stretch">
                {portfolioContent.experience.map((exp, index) => (
                  <TimelineItem
                    key={`${exp.company}-${exp.title}-${exp.start}`}
                    experience={exp}
                    index={index}
                  />
                ))}
              </VStack>
            </Box>
          </VStack>

          {/* Certificates Grid */}
          <VStack spacing={8} w="full">
            <Heading 
              size="xl" 
              textAlign="center"
              bgGradient="linear(to-r, green.400, teal.500)" 
              bgClip="text"
              fontWeight="bold"
            >
              Certificates & Achievements
            </Heading>
            
            <Flex
              wrap="wrap"
              gap={6}
              justify="center"
              w="full"
            >
              {portfolioContent.certificat.map((cert) => (
                <CertificateCard
                  key={cert.photo}
                  photo={cert.photo}
                  name={cert.name || 'Certificate'}
                />
              ))}
            </Flex>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

interface TimelineItemProps {
  experience: {
    title: string;
    company: string;
    start: string;
    end: string;
    image: string;
  };
  index: number;
}

function TimelineItem({ experience, index }: Readonly<TimelineItemProps>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  let initialX = -30;
  if (!isMobile) {
    initialX = isEven ? -50 : 50;
  }

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <Flex
        direction={{ base: 'row', md: isEven ? 'row' : 'row-reverse' }}
        align="center"
        gap={8}
      >
        {/* Timeline Dot */}
        <Box
          position="relative"
          flexShrink={0}
          ml={{ base: 0, md: isEven ? 'auto' : 0 }}
          mr={{ base: 0, md: isEven ? 0 : 'auto' }}
        >
          <Box
            position="absolute"
            left={{ base: '20px', md: isEven ? 'auto' : '50%' }}
            right={{ base: 'auto', md: isEven ? '50%' : 'auto' }}
            top="50%"
            transform="translate(-50%, -50%)"
            w="20px"
            h="20px"
            borderRadius="full"
            bg="cyan.500"
            boxShadow="0 0 20px rgba(6, 182, 212, 0.6)"
            zIndex={2}
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="10px"
              h="10px"
              borderRadius="full"
              bg="white"
            />
          </Box>
        </Box>

        {/* Content Card */}
        <Box
          flex={1}
          maxW={{ base: 'calc(100% - 60px)', md: '45%' }}
          ml={{ base: '60px', md: 0 }}
        >
          <Box
            bg="rgba(26, 32, 44, 0.6)"
            backdropFilter="blur(10px)"
            p={6}
            borderRadius="xl"
            border="2px solid"
            borderColor="whiteAlpha.200"
            _hover={{
              borderColor: 'cyan.500',
              transform: 'translateY(-4px)',
              boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
            }}
            transition="all 0.3s ease"
          >
            <HStack spacing={4} mb={4}>
              <Image
                src={experience.image}
                alt={experience.company}
                borderRadius="lg"
                boxSize="60px"
                objectFit="cover"
              />
              <VStack align="start" spacing={1} flex={1}>
                <Heading size="md" color="cyan.400">
                  {experience.title}
                </Heading>
                <Text fontWeight="semibold" color="gray.300" fontSize="sm">
                  {experience.company}
                </Text>
              </VStack>
            </HStack>
            
            <HStack spacing={2}>
              <Icon as={FaCheckCircle} color="green.400" />
              <Badge
                colorScheme="cyan"
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="md"
              >
                {experience.start} - {experience.end}
              </Badge>
            </HStack>
          </Box>
        </Box>
      </Flex>
    </MotionBox>
  );
}

interface CertificateCardProps {
  photo: string;
  name: string;
}

function CertificateCard({ photo, name }: Readonly<CertificateCardProps>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4 }}
      w={{ base: 'calc(50% - 12px)', sm: '200px' }}
    >
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="xl"
        border="2px solid"
        borderColor="whiteAlpha.200"
        bg="gray.800"
        _hover={{
          borderColor: 'green.400',
          transform: 'translateY(-8px) scale(1.05)',
          '& img': {
            transform: 'scale(1.15)',
          },
          '& .overlay': {
            opacity: 1,
          },
        }}
        transition="all 0.3s ease"
        cursor="pointer"
      >
        <Box overflow="hidden" h="180px">
          <Image
            src={photo}
            alt={name}
            w="full"
            h="full"
            objectFit="cover"
            transition="transform 0.3s ease"
          />
        </Box>
        
        <Box
          className="overlay"
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          bg="linear-gradient(to top, rgba(0,0,0,0.9), transparent)"
          p={3}
          opacity={1}
          transition="opacity 0.3s ease"
        >
          <Text fontSize="xs" fontWeight="bold" color="white" textAlign="center">
            {name}
          </Text>
        </Box>
      </Box>
    </MotionBox>
  );
}
