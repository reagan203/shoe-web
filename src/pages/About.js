import { Box, Heading, Text, Stack } from '@chakra-ui/react';

function About() {
  return (
    <Box p={5}>
      <Stack spacing={5}>
        <Heading as="h1" size="xl">
          About Shoe Store
        </Heading>
        
        <Text fontSize="lg">
          Welcome to the Shoe Store! Our application is designed to provide you with a seamless and enjoyable shopping experience for all your footwear needs.
        </Text>
        <Text>
          We offer a wide range of shoes from top brands, catering to various styles and preferences. Whether you're looking for the latest sneakers, formal shoes, or comfortable everyday wear, we've got you covered.
        </Text>
        <Text>
          Our user-friendly interface allows you to easily browse and find the perfect pair of shoes. You can search by category, brand, size, or price to narrow down your options. Each product page provides detailed information about the shoe, including high-quality images, descriptions, and customer reviews.
        </Text>
        <Text>
          At Shoe Store, we are committed to providing exceptional customer service. If you have any questions or need assistance, our support team is here to help. We also offer a hassle-free return policy to ensure your complete satisfaction with your purchase.
        </Text>
        <Text>
          Thank you for choosing Shoe Store. Happy shopping!
        </Text>
      </Stack>
    </Box>
  );
}

export default About;
