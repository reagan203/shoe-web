// src/components/Header.jsx
// import React from 'react';
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Header() {
  return (
    <Box mb={5} >
      <Flex as="nav" p={5} bg="teal.500" color="white" justify="space-between" align="center">
        <Heading as="h1" size="lg">
          Shoe Store
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link as={NavLink} to="/home" _hover={{ textDecoration: 'none' }} _activeLink={{ color: 'teal.300' }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" _hover={{ textDecoration: 'none' }} _activeLink={{ color: 'teal.300' }}>
            About
          </Link>
        </Stack>
      </Flex>
      <Carousel showThumbs={false} autoPlay infiniteLoop >
        <Box>
        <img src="https://eikenshop.com/cdn/shop/articles/lennart-uecker-49bZDF_EgJU-unsplash_570594d4-fac9-4e21-a1d0-50165afa438c.jpg?v=1678092844" alt="" height={20} />
        </Box>
      </Carousel>
    </Box>
  );
}

export default Header;
