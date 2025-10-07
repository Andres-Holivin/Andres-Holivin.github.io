'use client';

import { useId } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEnvelope } from 'react-icons/fa';
import { portfolioContent } from '@/lib/content';

const MotionBox = motion(Box);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();
  const toast = useToast();

  const onSubmit = (data: ContactFormData) => {
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:andres12holivin@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: 'Opening email client...',
      description: 'Your default email client will open shortly.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    reset();
  };

  return (
    <Box
      id="contact"
      minH="100vh"
      bgGradient="linear(to-b, gray.800, gray.900)"
      py={20}
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.md">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <VStack spacing={8}>
            <VStack spacing={4} textAlign="center">
              <Heading size="2xl" bgGradient="linear(to-r, brand.400, purple.500)" bgClip="text">
                Get In Touch
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400" maxW="xl">
                I&apos;m looking for new opportunities and knowledge. My inbox is
                always open for sharing and questions. Feel free to reach out!
              </Text>
            </VStack>

            <Box
              w="full"
              bg="gray.800"
              p={8}
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.700"
              boxShadow="0 20px 60px rgba(0, 0, 0, 0.5)"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={6}>
                  <FormControl isInvalid={!!errors.name} id={nameId}>
                    <FormLabel color="gray.300" htmlFor={nameId}>Name</FormLabel>
                    <Input
                      {...register('name', { required: 'Name is required' })}
                      id={nameId}
                      placeholder="Your name"
                      bg="gray.900"
                      border="1px solid"
                      borderColor="gray.600"
                      _hover={{ borderColor: 'brand.500' }}
                      _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                    />
                    <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email} id={emailId}>
                    <FormLabel color="gray.300" htmlFor={emailId}>Email</FormLabel>
                    <Input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      id={emailId}
                      type="email"
                      placeholder="your.email@example.com"
                      bg="gray.900"
                      border="1px solid"
                      borderColor="gray.600"
                      _hover={{ borderColor: 'brand.500' }}
                      _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                    />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.message} id={messageId}>
                    <FormLabel color="gray.300" htmlFor={messageId}>Message</FormLabel>
                    <Textarea
                      {...register('message', { required: 'Message is required' })}
                      id={messageId}
                      placeholder="Your message..."
                      rows={6}
                      bg="gray.900"
                      border="1px solid"
                      borderColor="gray.600"
                      _hover={{ borderColor: 'brand.500' }}
                      _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                    />
                    <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    colorScheme="brand"
                    leftIcon={<Icon as={FaEnvelope} />}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 30px rgba(33, 150, 243, 0.4)',
                    }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>

            <HStack spacing={6} pt={4}>
              {portfolioContent.contact
                .filter((c) => c.action.includes('github') || c.action.includes('linkedin'))
                .map((item) => (
                  <Button
                    key={item.action}
                    variant="outline"
                    size="lg"
                    leftIcon={<Icon as={item.iconType} />}
                    onClick={() => window.open(item.action, '_blank')}
                    _hover={{
                      bg: 'brand.500',
                      borderColor: 'brand.500',
                      transform: 'translateY(-2px)',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
            </HStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
