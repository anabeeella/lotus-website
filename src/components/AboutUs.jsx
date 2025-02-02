import { Box, Heading, Text, SimpleGrid, Container, VStack, Avatar } from '@chakra-ui/react'

function AboutUs() {
  return (
    <Box as="section" id="about" py={12} h="90vh" display="flex" justifyContent="center" alignItems="center">
      <Container maxW="container.xl">
        <Heading as="h2" mb={8} textAlign="center">
          Sobre Nosotros
        </Heading>
        <Box>
          <Text mb={8}>
            Somos una agencia de marketing digital comprometida con el éxito de nuestros clientes.
          </Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <VStack align="center" p={6} borderWidth="1px" borderRadius="lg">
              <Avatar src="https://bit.ly/tioluwani-kola" />
              <Heading as="h3" size="md">Nombre del Miembro</Heading>
              <Text>Cargo en la empresa</Text>
            </VStack>
            <VStack align="center" p={6} borderWidth="1px" borderRadius="lg">
              <Avatar src="https://bit.ly/tioluwani-kola" />
              <Heading as="h3" size="md">Nombre del Miembro</Heading>
              <Text>Cargo en la empresa</Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUs 