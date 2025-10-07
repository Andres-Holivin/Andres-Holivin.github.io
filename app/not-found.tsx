import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box minH="100vh" bg="gray.900" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={6}>
        <Heading size="3xl" bgGradient="linear(to-r, cyan.400, purple.500)" bgClip="text">
          404
        </Heading>
        <Heading size="lg" color="white">
          Page Not Found
        </Heading>
        <Text color="gray.400">
          The page you&apos;re looking for doesn&apos;t exist.
        </Text>
        <Button as={Link} href="/" colorScheme="cyan">
          Go Home
        </Button>
      </VStack>
    </Box>
  );
}
