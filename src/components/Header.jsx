import { Flex, Box, Button, HStack, Link } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import logo from '../assets/11.png'

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <Flex
      as="header"
      py={4}
      px={4}
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Box>
        <Link onClick={() => scrollToSection('hero')}>
          <img src={logo} style={{ height: '52px' }} alt="Lotus logo" />
        </Link>
      </Box>
      
      <HStack spacing={8}>
        <Link onClick={() => scrollToSection('services')} cursor="pointer">
          Servicios
        </Link>
        <Link onClick={() => scrollToSection('portfolio')} cursor="pointer">
          Portfolio
        </Link>
        <Link onClick={() => scrollToSection('about')} cursor="pointer">
          Nosotros
        </Link>
        <Link onClick={() => scrollToSection('blog')} cursor="pointer">
          Blog
        </Link>
        <Button 
          colorScheme="primary" 
          onClick={() => scrollToSection('contact')}
        >
          Contacto
        </Button>
      </HStack>
    </Flex>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired
}
