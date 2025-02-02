import { Box, Container, Heading, VStack, Input, Textarea, Button } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Box as="section" id="contact" py={12}>
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading as="h2" textAlign="center">
            Contacto
          </Heading>
          
          <VStack as="form" spacing={4} w="full" maxW="md">
            <Input
              type="text"
              placeholder="Nombre"
              size="lg"
            />
            <Input
              type="email"
              placeholder="Email"
              size="lg"
            />
            <Textarea
              placeholder="Mensaje"
              size="lg"
              rows={6}
            />
            <Button
              type="submit"
              colorScheme="purple"
              size="lg"
              w="full"
            >
              Enviar
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}