import { Box,Heading,Text,Button} from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <Box
      id="contact"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      paddingX="80px"
      sx={{'background-image':'linear-gradient(white,gray,black ,black)'}}
    >
      <Box h="480px" paddingX="180px" bgColor="blackAlpha.800" textColor="white" display="flex" flexDir="column" justifyContent="center" gap="8" rounded="lg" shadow="lg" alignItems="center">
        <Heading size="xl">Say Hello To Me</Heading>
        <Text fontSize="xl" textAlign="center">I&apos;m looking for any new opportunites and new knowledge. My mail always open for sharing and question. I always do my best for everything i do. Say hi to me with below button ! </Text>
        <Button 
        onClick={(e)=>{
          window.location.href='mailto:andres12holivin@gmail.com';
          e.preventDefault();
        }}
        variant='outline' 
        border='2px'
        _hover={{
          bg:"gray.600"
        }}
        _active={{
          bg:"gray.500"
        }}
        _focus={{
          boxShadow:
            '0 0 0 0 transparent',
        }}        
        >Say Hello</Button>
      </Box>
    </Box>
  );
};
export default ContactPage;