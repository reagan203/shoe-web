// src/pages/ShippingPolicy.jsx
import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

function ShippingPolicy() {
  return (
    <Box p={5}>
      <Stack spacing={5}>
        <Heading as="h1" size="xl">
          Shipping Policy
        </Heading>
        <Text fontSize="lg">
          At Shoe Store, we are committed to delivering your orders in a timely and efficient manner. Please review our shipping policy below to understand how we handle shipping and delivery.
        </Text>
        <Heading as="h2" size="lg">
          Processing Time
        </Heading>
        <Text>
          All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
        </Text>
        <Text>
          If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or phone.
        </Text>
        <Heading as="h2" size="lg">
          Shipping Rates & Delivery Estimates
        </Heading>
        <Text>
          Shipping charges for your order will be calculated and displayed at checkout. Delivery estimates are as follows:
        </Text>
        <Stack pl={5} spacing={2}>
          <Text>
            <strong>Standard Shipping:</strong> 3-5 business days
          </Text>
          <Text>
            <strong>Expedited Shipping:</strong> 1-3 business days
          </Text>
          <Text>
            <strong>Overnight Shipping:</strong> 1-2 business days
          </Text>
        </Stack>
        <Text>
          Delivery delays can occasionally occur. Shoe Store is not responsible for any delays caused by the shipping carrier.
        </Text>
        <Heading as="h2" size="lg">
          Shipment to P.O. Boxes or APO/FPO Addresses
        </Heading>
        <Text>
          Shoe Store ships to addresses within the U.S., U.S. Territories, and APO/FPO/DPO addresses.
        </Text>
        <Heading as="h2" size="lg">
          Shipment Confirmation & Order Tracking
        </Heading>
        <Text>
          You will receive a shipment confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
        </Text>
        <Heading as="h2" size="lg">
          Customs, Duties, and Taxes
        </Heading>
        <Text>
          Shoe Store is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
        </Text>
        <Heading as="h2" size="lg">
          Damages
        </Heading>
        <Text>
          Shoe Store is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.
        </Text>
        <Text>
          Please save all packaging materials and damaged goods before filing a claim.
        </Text>
        <Heading as="h2" size="lg">
          International Shipping Policy
        </Heading>
        <Text>
          We currently do not ship outside the U.S.
        </Text>
      </Stack>
    </Box>
  );
}

export default ShippingPolicy;
