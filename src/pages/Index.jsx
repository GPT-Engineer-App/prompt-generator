import { useState } from "react";
import { Container, VStack, Input, Button, Image, Text, Box, Heading, Flex } from "@chakra-ui/react";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleGenerateImage = () => {
    // Mocking backend image generation
    setImageSrc("https://via.placeholder.com/500");
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" w="100%" p={4} bg="blue.500" color="white" justifyContent="center">
        <Heading as="h1" size="lg">Image Generation App</Heading>
      </Flex>
      <VStack spacing={8} mt={8} align="center">
        <Input
          placeholder="Enter your prompt"
          size="lg"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button colorScheme="blue" size="lg" onClick={handleGenerateImage}>
          Generate Image
        </Button>
        {imageSrc && (
          <Box boxSize="500px" border="1px" borderColor="gray.200">
            <Image src={imageSrc} alt="Generated" boxSize="100%" objectFit="cover" />
          </Box>
        )}
        {!imageSrc && (
          <Box boxSize="500px" border="1px" borderColor="gray.200" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500">Your generated image will appear here</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;