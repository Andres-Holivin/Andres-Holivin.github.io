'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Progress,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioContent } from '@/lib/content';

const MotionBox = motion(Box);

export default function SkillsPage() {
  return (
    <Box
      id="skills"
      minH="100vh"
      bgGradient="linear(to-b, gray.900, gray.800, gray.900)"
      py={20}
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading 
              size="2xl" 
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" 
              bgClip="text"
              fontWeight="extrabold"
            >
              Skills & Expertise
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400" maxW="2xl">
              My technical skills and proficiency levels across various domains
            </Text>
          </VStack>

          {/* Skills Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {portfolioContent.skills.map((category, categoryIndex) => (
              <SkillCategoryCard
                key={category.category}
                category={category.category}
                skills={category.skills}
                delay={categoryIndex * 0.1}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

interface SkillCategoryCardProps {
  category: string;
  skills: Array<{ name: string; level: number }>;
  delay: number;
}

function SkillCategoryCard({ category, skills, delay }: Readonly<SkillCategoryCardProps>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      <Box
        bg="rgba(26, 32, 44, 0.8)"
        backdropFilter="blur(10px)"
        p={8}
        borderRadius="2xl"
        border="1px solid"
        borderColor="whiteAlpha.200"
        h="full"
        _hover={{
          borderColor: 'cyan.500',
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
        }}
        transition="all 0.3s ease"
      >
        <VStack align="stretch" spacing={6}>
          <Heading size="md" color="cyan.400" fontWeight="bold">
            {category}
          </Heading>

          <VStack align="stretch" spacing={4}>
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                inView={inView}
              />
            ))}
          </VStack>
        </VStack>
      </Box>
    </MotionBox>
  );
}

interface SkillBarProps {
  name: string;
  level: number;
  inView: boolean;
}

function SkillBar({ name, level, inView }: Readonly<SkillBarProps>) {
  let progressColor = 'purple';
  if (level >= 80) {
    progressColor = 'cyan';
  } else if (level >= 60) {
    progressColor = 'blue';
  }

  let gradientColors = '#8b5cf6, #d946ef';
  if (progressColor === 'cyan') {
    gradientColors = '#06b6d4, #3b82f6';
  } else if (progressColor === 'blue') {
    gradientColors = '#3b82f6, #8b5cf6';
  }

  return (
    <Box>
      <VStack align="stretch" spacing={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" fontWeight="medium" color="gray.300">
            {name}
          </Text>
          <Text fontSize="xs" color="gray.500" fontWeight="bold">
            {level}%
          </Text>
        </Box>
        <Box position="relative">
          <Progress
            value={inView ? level : 0}
            size="sm"
            borderRadius="full"
            bg="whiteAlpha.200"
            sx={{
              '& > div': {
                background: `linear-gradient(90deg, ${gradientColors})`,
                transition: 'width 1s ease-out',
              },
            }}
          />
          {level >= 85 && (
            <Box
              position="absolute"
              right={0}
              top="-8px"
              fontSize="xs"
              color="cyan.400"
            >
              ⭐
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  );
}
