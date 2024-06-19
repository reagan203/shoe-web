// src/pages/NotFound.jsx

import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, pink.400, purple.500)"
      color="white"
      textAlign="center"
      p={5}
    >
      <VStack spacing={5}>
        <Heading size="2xl">404</Heading>
        <Text fontSize="xl">Oops! The page you're looking for doesn't exist.</Text>
        <Button
          as={Link}
          to="/"
          colorScheme="teal"
          size="lg"
          _hover={{ bg: 'teal.600' }}
        >
          Go to Home
        </Button>
      </VStack>
    </Box>
  );
}

export default NotFound;
