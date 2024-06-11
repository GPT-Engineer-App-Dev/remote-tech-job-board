import { useParams } from "react-router-dom";
import { Container, Box, Text } from "@chakra-ui/react";

const jobDetails = {
  1: { title: "Product Manager", category: "Product", description: "Responsible for product planning and execution." },
  2: { title: "UX Designer", category: "Design", description: "Focuses on user experience and design." },
  3: { title: "Frontend Engineer", category: "Engineering", description: "Develops the client-side of web applications." },
  4: { title: "Backend Engineer", category: "Engineering", description: "Works on server-side logic and integration." },
  5: { title: "Product Designer", category: "Design", description: "Designs products with a focus on user experience." },
};

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobDetails[jobId];

  if (!job) {
    return <Text>Job not found</Text>;
  }

  return (
    <Container centerContent maxW="container.md" py={10}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Text fontSize="3xl" fontWeight="bold">{job.title}</Text>
        <Text mt={2} color="gray.500">{job.category}</Text>
        <Text mt={4}>{job.description}</Text>
      </Box>
    </Container>
  );
};

export default JobDetails;