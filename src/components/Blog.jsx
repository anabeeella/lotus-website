import { Box, Heading, SimpleGrid, VStack, Text, Link, Container } from '@chakra-ui/react'

function Blog() {
  return (
    <Box as="section" id="blog" py={12} display="flex" justifyContent="center" alignItems="center" h="90vh">
      <Container maxW="container.xl">
        <Heading as="h2" mb={8} textAlign="center">
          Blog
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <VStack align="start" p={6} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">Título del Post</Heading>
            <Text>Descripción corta del post...</Text>
            <Link href="/blog/post-1" color="purple.500">
              Leer más
            </Link>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Blog 