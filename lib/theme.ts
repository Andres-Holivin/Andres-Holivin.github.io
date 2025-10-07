import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'white',
            },
            '*::selection': {
                bg: 'blue.500',
                color: 'white',
            },
            '::-webkit-scrollbar': {
                width: '8px',
                height: '8px',
            },
            '::-webkit-scrollbar-track': {
                bg: 'gray.900',
                borderRadius: '10px',
            },
            '::-webkit-scrollbar-thumb': {
                bg: 'gray.600',
                borderRadius: '10px',
                _hover: {
                    bg: 'gray.500',
                },
            },
        },
    },
    colors: {
        brand: {
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
        },
    },
    fonts: {
        heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
        body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    },
    components: {
        Button: {
            defaultProps: {
                colorScheme: 'brand',
            },
            variants: {
                solid: {
                    borderRadius: 'full',
                    fontWeight: 'bold',
                    _hover: {
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    },
                    transition: 'all 0.2s',
                },
                ghost: {
                    _hover: {
                        transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s',
                },
            },
        },
        Heading: {
            baseStyle: {
                fontWeight: 'bold',
                letterSpacing: 'tight',
            },
        },
    },
});

export default theme;
