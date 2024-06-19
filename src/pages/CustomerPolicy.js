// src/pages/CustomerPolicy.jsx
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

function CustomerPolicy() {
  return (
    <Box p={5}>
      <Stack spacing={5}>
        <Heading as="h1" size="xl">
          Customer Policy
        </Heading>
        <Text fontSize="lg">
          At Shoe Store, we prioritize our customers and strive to provide the best service possible. Please review our customer policy below to understand our commitments to you.
        </Text>
        <Heading as="h2" size="lg">
          Satisfaction Guarantee
        </Heading>
        <Text>
          Your satisfaction is our top priority. If you are not satisfied with your purchase, please contact our customer service team within 30 days of receiving your order. We will do our best to resolve any issues you may have.
        </Text>
        <Heading as="h2" size="lg">
          Returns and Exchanges
        </Heading>
        <Text>
          We offer a hassle-free return and exchange policy. You can return or exchange any unworn, unused items within 30 days of purchase. Items must be returned in their original packaging with all tags attached.
        </Text>
        <Heading as="h2" size="lg">
          Customer Support
        </Heading>
        <Text>
          Our customer support team is available to assist you with any questions or concerns. You can reach us by email at support@shoestore.com or by phone at (123) 456-7890. Our support hours are Monday through Friday, 9 AM to 5 PM.
        </Text>
        <Heading as="h2" size="lg">
          Privacy Policy
        </Heading>
        <Text>
          We respect your privacy and are committed to protecting your personal information. Please review our Privacy Policy to understand how we collect, use, and safeguard your data.
        </Text>
        <Heading as="h2" size="lg">
          Security
        </Heading>
        <Text>
          We take the security of your personal information seriously. Our website uses industry-standard security measures to protect your data during transmission and storage.
        </Text>
        <Heading as="h2" size="lg">
          Feedback
        </Heading>
        <Text>
          We value your feedback and use it to improve our products and services. If you have any suggestions or comments, please do not hesitate to share them with us.
        </Text>
      </Stack>
    </Box>
  );
}

export default CustomerPolicy;
