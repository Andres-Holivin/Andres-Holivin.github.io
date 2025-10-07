'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Image,
  IconButton,
  Badge,
  Card,
  CardBody,
  CardFooter,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Wrap,
  WrapItem,
  Button,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { portfolioContent } from '@/lib/content';

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

export default function ProjectPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    portfolioContent.project.forEach((proj) => {
      if (proj.tags) {
        proj.tags.forEach((tag) => tags.add(tag));
      }
    });
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, []);

  // Filter projects based on search and selected tags
  const filteredProjects = useMemo(() => {
    return portfolioContent.project.filter((proj) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) || false;

      // Tag filter
      const matchesTags =
        selectedTags.length === 0 ||
        (proj.tags && selectedTags.every((tag) => proj.tags?.includes(tag)));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <Box
      id="projects"
      minH="100vh"
      bgGradient="linear(to-b, gray.900, gray.800)"
      py={20}
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading 
              size="2xl" 
              bgGradient="linear(to-r, brand.400, purple.500)" 
              bgClip="text"
              fontWeight="extrabold"
            >
              Project Showcase
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400" maxW="2xl">
              Explore my portfolio of projects. Use search and filters to find
              projects by technology or topic.
            </Text>
          </VStack>

          {/* Search Bar */}
          <Box w="full" maxW="2xl">
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="gray.800"
                border="2px solid"
                borderColor="gray.700"
                _hover={{ borderColor: 'brand.500' }}
                _focus={{
                  borderColor: 'brand.500',
                  boxShadow: '0 0 20px rgba(33, 150, 243, 0.3)',
                }}
                color="white"
              />
            </InputGroup>
          </Box>

          {/* Technology Filter Tags */}
          {allTags.length > 0 && (
            <VStack spacing={4} w="full">
              <Heading size="sm" color="gray.400" textTransform="uppercase" letterSpacing="wide">
                Filter by Technology
              </Heading>
              <Wrap spacing={3} justify="center">
                {allTags.map((tag) => (
                  <WrapItem key={tag}>
                    <Button
                      size="sm"
                      variant={selectedTags.includes(tag) ? 'solid' : 'outline'}
                      colorScheme={selectedTags.includes(tag) ? 'brand' : 'gray'}
                      onClick={() => toggleTag(tag)}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: selectedTags.includes(tag)
                          ? '0 8px 20px rgba(33, 150, 243, 0.4)'
                          : '0 4px 12px rgba(255, 255, 255, 0.1)',
                      }}
                      transition="all 0.2s ease"
                    >
                      {tag}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
              {selectedTags.length > 0 && (
                <Button
                  size="sm"
                  variant="ghost"
                  colorScheme="red"
                  onClick={() => setSelectedTags([])}
                >
                  Clear Filters
                </Button>
              )}
            </VStack>
          )}

          {/* Results Count */}
          <Text color="gray.500" fontSize="sm">
            Showing {filteredProjects.length} of {portfolioContent.project.length} projects
          </Text>

          {/* Projects Grid */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
            w="full"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <MotionGridItem
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    bg="gray.800"
                    border="1px solid"
                    borderColor="gray.700"
                    h="full"
                    display="flex"
                    flexDirection="column"
                    _hover={{
                      borderColor: 'brand.500',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(33, 150, 243, 0.3)',
                    }}
                    transition="all 0.3s ease"
                  >
                    <Box position="relative" overflow="hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        w="full"
                        h="200px"
                        objectFit="contain"
                        transition="transform 0.3s ease"
                        _hover={{
                          transform: 'scale(1.1)',
                        }}
                      />
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bgGradient="linear(to-t, rgba(0,0,0,0.8), transparent)"
                      />
                    </Box>

                    <CardBody flex="1">
                      <VStack align="start" spacing={3}>
                        <Heading size="md" color="brand.400">
                          {project.title}
                        </Heading>
                        <Text color="gray.300" fontSize="sm" lineHeight="tall">
                          {project.desc}
                        </Text>
                        {project.tags && (
                          <Wrap spacing={2}>
                            {project.tags.map((tag) => (
                              <WrapItem key={tag}>
                                <Badge
                                  colorScheme={selectedTags.includes(tag) ? 'brand' : 'purple'}
                                  fontSize="xs"
                                  px={2}
                                  py={1}
                                  borderRadius="md"
                                  fontWeight="semibold"
                                >
                                  {tag}
                                </Badge>
                              </WrapItem>
                            ))}
                          </Wrap>
                        )}
                      </VStack>
                    </CardBody>

                    <CardFooter>
                      <HStack spacing={2}>
                        {project.icons.map((iconItem) => (
                          <IconButton
                            key={iconItem.link}
                            aria-label={iconItem.label}
                            icon={<Box as={iconItem.iconType} size={24}/>}
                            size="sm"
                            variant="ghost"
                            colorScheme="brand"
                            _hover={{
                              transform: 'scale(1.2)',
                              color: 'brand.300',
                            }}
                            transition="all 0.2s"
                            onClick={() => window.open(iconItem.link, '_blank')}
                          />
                        ))}
                      </HStack>
                    </CardFooter>
                  </Card>
                </MotionGridItem>
              ))}
            </AnimatePresence>
          </Grid>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <VStack spacing={4} py={12}>
                <Text fontSize="xl" color="gray.400">
                  No projects found matching your criteria
                </Text>
                <Button
                  colorScheme="brand"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTags([]);
                  }}
                >
                  Clear All Filters
                </Button>
              </VStack>
            </MotionBox>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
