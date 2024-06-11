import { useParams } from "react-router-dom";
import { Container, Box, Text } from "@chakra-ui/react";
import { useEvent } from "../integrations/supabase/index.js";

const JobDetails = () => {
  const { jobId } = useParams();
  const { data: job, isLoading, error } = useEvent(jobId);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading job details</Text>;
  if (!job) return <Text>Job not found</Text>;

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