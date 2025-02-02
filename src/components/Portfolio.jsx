import { Box, Container, Heading, SimpleGrid, Image, VStack, Text } from '@chakra-ui/react'
import { StarIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'

const portfolioItems = [
  {
    title: "Proyecto 1",
    image: "https://placehold.co/600x400",
    icon: StarIcon,
    description: "Descripción breve del proyecto"
  },
  {
    title: "Proyecto 2",
    image: "https://placehold.co/600x400",
    icon: EditIcon,
    description: "Descripción breve del proyecto"
  },
  {
    title: "Proyecto 3",
    image: "https://placehold.co/600x400",
    icon: ViewIcon,
    description: "Descripción breve del proyecto"
  }
]

function Portfolio() {
  return (
    <Box as="section" id="portfolio" py={12} h="90vh" display="flex" justifyContent="center" alignItems="center">
      <Container maxW="container.xl">
        <Heading as="h2" mb={8} textAlign="center">
          Portfolio
        </Heading>
        
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {portfolioItems.map((item, index) => (
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
              <Box position="relative" overflow="hidden" borderRadius="md" w="full">
                <Image
                  src={item.image}
                  alt={item.title}
                  w="full"
                  h="200px"
                  objectFit="cover"
                  transition="transform 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}
                />
              </Box>
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

export default Portfolio 