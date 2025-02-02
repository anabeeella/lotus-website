import { Container } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import AboutUs from './components/AboutUs'
import WhyLotus from './components/WhyLotus'
import Contact from './components/Contact'
import lotusLogo from './assets/11.png'
import { Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './ui/theme'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={
        <Container maxW="container.xl">
          <Header logo={lotusLogo} />
          <Hero />
          <Services />
          <WhyLotus />
          <Portfolio />
          <AboutUs />
          <Contact />
        </Container>
      } />
          </Routes>
    </ChakraProvider>
  )
}

export default App
