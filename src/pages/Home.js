// src/pages/Home.jsx
import { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react';

// Sample shoe data with direct image URLs
const shoes = [
  { id: 1, name: 'Air Max', price: '$150', image: 'https://media.gq.com/photos/5fa2ce5dc0e38edb6bd3ac91/master/pass/airmax.jpg' },
  { id: 2, name: 'Jordan', price: '$200', image: 'https://sothebys-com.brightspotcdn.com/dims4/default/26ae228/2147483647/strip/true/crop/3543x2338+0+0/resize/684x451!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fba%2F63%2F5448ec3a43ad881557d41485631d%2F972sneakers-cfk7z-t3-01-1.jpg' },
  { id: 3, name: 'Blazer', price: '$100', image: 'https://cdn.shopify.com/s/files/1/0852/3376/products/da8ca7f349c7109d6e90fe408998ba71.jpg?v=1658781858' },
  { id: 4, name: 'Cortez', price: '$120', image: 'https://pictures-kenya.jijistatic.com/13032109_nike-classic-cortez-leather-sport-shoes-for-women-pink-1_620x620.webp' },
  { id: 5, name: 'Pegasus', price: '$130', image: 'https://i.ebayimg.com/images/g/ozkAAOSwnMtidUSn/s-l500.jpg' },
  { id: 6, name: 'React', price: '$140', image: 'https://5.imimg.com/data5/OA/OB/PN/SELLER-17552598/34-500x500.jpeg' },
  { id: 7, name: 'Vapormax', price: '$190', image: 'https://pictures-kenya.jijistatic.com/12804823_black-gold-vapromaxplus3_620x620.webp' },
  { id: 8, name: 'Zoom Fly', price: '$160', image: 'https://believeintherun.com/wp-content/uploads/2022/08/nike-zoom-fly-5-cover.jpg' },
  { id: 9, name: 'Metcon', price: '$170', image: 'https://www.runningshoesguru.com/wp-content/uploads/2021/09/Nike-Metcon-7-pic-13-3-957x470.jpeg' },
  { id: 10, name: 'Free RN', price: '$110', image: 'https://hips.hearstapps.com/hmg-prod/images/nike-free-run-5-womens-0303-1554407778.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*' },
  { id: 11, name: 'Huarache', price: '$120', image: 'https://pictures-kenya.jijistatic.com/40287299_NjIwLTY4OS1lZGY4OWNmNTRh.webp' },
  { id: 12, name: 'SB Dunk', price: '$130', image: 'https://mmfashionwear.co.ke/media/2023/03/Nike-SB-Dunk-Dark-green.jpeg' },
  { id: 13, name: 'Shox', price: '$140', image: 'https://cms-cdn.thesolesupplier.co.uk/2022/12/nike-shox-tl-black-red-ar3566-002_w474_h474_q100_pad_.jpeg.webp' },
  { id: 14, name: 'ZoomX', price: '$150', image: 'https://c02.purpledshub.com/uploads/sites/46/2023/04/nike-zoomx-streakfly-shoe-cbe3163.jpeg?webp=1&w=1200' },
  { id: 15, name: 'Air Force 1', price: '$160', image: 'https://sothebys-com.brightspotcdn.com/f8/6d/53e2038448de9790372e1fa8c42b/img-5172-2.jpg' },
  { id: 16, name: 'React Infinity', price: '$170', image: 'https://i.ytimg.com/vi/EXt69AlJfgo/maxresdefault.jpg' },
  { id: 17, name: 'Structure', price: '$180', image: 'https://i.ebayimg.com/images/g/F0MAAOSwQxhjF5jD/s-l1200.webp' },
  { id: 18, name: 'Terra Kiger', price: '$190', image: 'https://believeintherun.com/wp-content/uploads/2023/07/nike-kiger-9-cover.jpg' },
  { id: 19, name: 'Odyssey React', price: '$200', image: 'https://i.ebayimg.com/images/g/V8EAAOSwIsZkjVIi/s-l1200.webp' },
  { id: 20, name: 'Epic Phantom', price: '$210', image: 'https://i.ebayimg.com/images/g/Ne8AAOSwJOFlVO7R/s-l1600.jpg' }
];

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedShoe, setSelectedShoe] = useState(null);

  const handleClick = (shoe) => {
    setSelectedShoe(shoe);
    onOpen();
  };

  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
        {shoes.map((shoe) => (
          <Box
            key={shoe.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            onClick={() => handleClick(shoe)}
            cursor="pointer"
          >
            <Image src={shoe.image} alt={shoe.name} />
            <Box p={5}>
              <Stack spacing={2}>
                <Text fontWeight="bold">{shoe.name}</Text>
                <Text>{shoe.price}</Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shoe Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedShoe && (
              <>
                <Text fontWeight="bold">{selectedShoe.name}</Text>
                <Text>{selectedShoe.price}</Text>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Home;
