
import { Box, Button, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function CoverPage() {
  const bgGradient = useBreakpointValue({
    base: 'linear(to-b, teal.400, blue.500)',
    md: 'linear(to-r, teal.400, blue.500)',
  });

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={5}
    >
      <VStack spacing={5}>
        <Heading size="2xl">Welcome to Shoe Store</Heading>
        <Text fontSize="xl">Find the best shoes that fit your style and comfort.</Text>
        <Button
          as={Link}
          to="/Home"
          colorScheme="teal"
          size="lg"
          _hover={{ bg: 'teal.600' }}
        >
          Shop Now
        </Button>
      </VStack>
    </Box>
  );
}

export default CoverPage;
