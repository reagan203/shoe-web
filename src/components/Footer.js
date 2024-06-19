import { Box, Flex, Link, Stack, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Box bg="teal.500" color="white" py={5} mt={10}>
      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Stack direction="row" spacing={4} mb={4}>
          <IconButton
            as="a"
            href="https://www.facebook.com"
            aria-label="Facebook"
            icon={<FaFacebook />}
            size="lg"
            isRound
            _hover={{ bg: 'teal.400' }}
          />
          <IconButton
            as="a"
            href="https://www.twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            isRound
            _hover={{ bg: 'teal.400' }}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com"
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="lg"
            isRound
            _hover={{ bg: 'teal.400' }}
          />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Link as={NavLink} to="/shipping-policy" _hover={{ color: 'teal.300' }}>
            Shipping Policy
          </Link>
          <Link as={NavLink} to="/customer-policy" _hover={{ color: 'teal.300' }}>
            Customer Policy
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Footer;
