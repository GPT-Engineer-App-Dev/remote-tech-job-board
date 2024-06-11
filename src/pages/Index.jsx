import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text, StackDivider } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch" width="100%">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">Remote Tech Jobs</Text>
        <HStack spacing={4} justify="center">
          <Button colorScheme="teal" variant={filter === "All" ? "solid" : "outline"} onClick={() => setFilter("All")}>All</Button>
          <Button colorScheme="teal" variant={filter === "Product" ? "solid" : "outline"} onClick={() => setFilter("Product")}>Product</Button>
          <Button colorScheme="teal" variant={filter === "Design" ? "solid" : "outline"} onClick={() => setFilter("Design")}>Design</Button>
          <Button colorScheme="teal" variant={filter === "Engineering" ? "solid" : "outline"} onClick={() => setFilter("Engineering")}>Engineering</Button>
        </HStack>
        <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="gray.200" />}>
          {filteredJobs.map(job => (
            <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Text fontSize="xl">{job.title}</Text>
              <Text mt={2} color="gray.500">{job.category}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;