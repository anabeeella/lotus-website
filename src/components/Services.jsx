import { Box, Container, Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react'
import { StarIcon, EditIcon, SearchIcon } from '@chakra-ui/icons'

const serviceItems = [
  {
    title: "Marketing Digital",
    icon: StarIcon,
    description: "Estrategias personalizadas para tu negocio"
  },
  {
    title: "Diseño Web",
    icon: EditIcon,
    description: "Sitios web modernos y responsivos"
  },
  {
    title: "SEO",
    icon: SearchIcon,
    description: "Optimización para motores de búsqueda"
  }
]

function Services() {
  return (
    <Box as="section" id="services" py={12} display="flex" justifyContent="center" alignItems="center" h="90vh">
      <Container maxW="container.xl">
      <Box marginBottom="40px">
          <Text>Somos una agencia especializada en Social Media Marketing, ubicada en el corazón de Sicilia, Italia. Nos dedicamos a ayudar a emprendedores y pequeñas empresas a crecer, destacarse y conectar con su público a través de estrategias digitales personalizadas.
          </Text>
          <Text>Creemos que cada marca tiene una historia única que contar, y nuestro propósito es traducir esa esencia en estrategias de alto impacto, combinando creatividad, datos y tecnología para lograr resultados reales.</Text>
        </Box>
        <Heading as="h3" mb={8} textAlign="center" >
          Nuestros Servicios
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {serviceItems.map((item, index) => (
            <VStack
              key={index}
              p={6}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="lg"
              spacing={4}
              align="center"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
              transition="all 0.3s"
            >
              <Box 
                p={2} 
                borderRadius="full" 
                bg="primary.500" 
                color="white"
                zIndex="1"
                width="40px"
                height="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <item.icon boxSize={5} />
              </Box>
              <Heading as="h3" size="md" textAlign="center">
                {item.title}
              </Heading>
              <Text textAlign="center" color="gray.600">
                {item.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Services 