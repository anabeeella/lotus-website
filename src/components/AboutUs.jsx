import { Box, Heading, Text, SimpleGrid, Container, VStack, Avatar } from '@chakra-ui/react'

const teamMembers = [
  {
    name: "Cecilia Fortunato",
    role: "Founder & Marketing Specialist",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Florencia Desabato",
    role: "Social Media & Marketing Specialist",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Anabella Rizzi",
    role: "Graphic Designer & Frontend Developer",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Martin Rodriguez Kedikian",
    role: "UX & Content Designer",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Patricio Ponce",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150"
  }
]

function AboutUs() {
  return (
    <Box as="section" id="about" py={12} h="90vh" display="flex" justifyContent="center" alignItems="center">
      <Container maxW="container.xl">
        <Heading as="h2" mb={8} textAlign="center">
          Sobre Nosotros
        </Heading>
        <Box>
          <Text mb={8}>
          Nuestro equipo de expertos en marketing digital y diseño web está comprometido en impulsar tu negocio con resultados tangibles.
          </Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            {teamMembers.map((member, index) => (
              <VStack align="center" p={6} borderWidth="1px" borderRadius="lg" key={index}>
                <Avatar src={member.image} />
                <Heading as="h3" size="md">{member.name}</Heading>
                <Text>{member.role}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUs 
