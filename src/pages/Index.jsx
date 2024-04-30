import { Box, Flex, Text, Heading, Button, Input, Textarea, VStack } from '@chakra-ui/react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Welcome to GPT Engineer</Heading>
        <Text fontSize="lg" mb={6}>Revolutionizing web development with AI.</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </Flex>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
        <VStack spacing={5}>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Feature 1: AI-driven development</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Feature 2: Real-time collaboration</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Feature 3: Scalable solutions</Text>
          </Flex>
        </VStack>
      </Box>
      <Box p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Testimonials</Heading>
        <VStack spacing={5}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Flex align="center">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </Flex>
            <Text mt={2}>"GPT Engineer has transformed our web development process!" - Company A</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Flex align="center">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </Flex>
            <Text mt={2}>"The AI features are incredibly powerful and easy to use." - Company B</Text>
          </Box>
        </VStack>
      </Box>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Contact Us</Heading>
        <VStack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;