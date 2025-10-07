'use client';

import {
    Box,
    Container,
    Flex,
    Image,
    Button,
    useDisclosure,
    IconButton,
    VStack,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            onClose();
        }
    };

    return (
        <Box
            as="nav"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg={scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'}
            backdropFilter={scrolled ? 'blur(10px)' : 'none'}
            borderBottom={scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'}
            transition="all 0.3s ease"
            boxShadow={scrolled ? 'lg' : 'none'}
        >
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center" py={4}>
                    <Image
                        src="/image/logo.svg"
                        alt="Logo"
                        height="50px"
                        width="150px"
                        objectFit="contain"
                        cursor="pointer"
                        onClick={() => scrollToSection('#home')}
                    />

                    {/* Desktop Navigation */}
                    <Flex gap={6} display={{ base: 'none', md: 'flex' }} align="center">
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                variant="ghost"
                                color="white"
                                _hover={{
                                    color: 'brand.400',
                                    transform: 'translateY(-2px)',
                                }}
                                _active={{ bg: 'transparent' }}
                                onClick={() => scrollToSection(item.href)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Flex>

                    {/* Mobile Navigation */}
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        display={{ base: 'flex', md: 'none' }}
                        onClick={onOpen}
                        variant="ghost"
                        color="white"
                        _hover={{ bg: 'whiteAlpha.200' }}
                    />
                </Flex>
            </Container>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="gray.900">
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch">
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    variant="ghost"
                                    onClick={() => scrollToSection(item.href)}
                                    justifyContent="flex-start"
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
