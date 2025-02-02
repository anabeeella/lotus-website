import { Box, Container, Heading, Text, Button, Flex, Image } from '@chakra-ui/react'
import bgPattern from '../assets/bg-pattern.png'
import lotusLogo from '../assets/16.png'

export default function Hero() {
  return (
    <Box
      as="section"
      bgImage={`url(${bgPattern})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="80vh"
    >
      <Container maxW="container.xl" h="full">
        <Flex
          h="full"
          align="center"
          justify="center"
          gap="100px"
        >
          <Box>
            <Image
              src={lotusLogo}
              alt="Lotus Marketing"
            />
          </Box>
          
          <Box>
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              color="white"
            >
              Lotus Marketing
            </Heading>
            <Text
              fontSize="xl"
              mb={8}
              color="white"
            >
              Impulsamos tu negocio con estrategias digitales efectivas
            </Text>
            <Button
              colorScheme="primary"
              size="lg"
              height="48px"
            >
              Conoce más
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
