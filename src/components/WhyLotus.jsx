import { Box, Heading, Container, Image, Text, List, ListItem, Icon } from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

const reasons = [
    {
        icon: CheckIcon,
        title: 'Estrategias efectivas',
        text: 'Campañas optimizadas para alcanzar objetivos concretos.'
    },
    {
        icon: CheckIcon,
        title: 'Creatividad y diseño de impacto',
        text: 'Branding y contenido visual que marcan la diferencia.'
    },
    {
        icon: CheckIcon,
        title: 'Publicidad digital que funciona',
        text: 'Maximiza tu inversión y llega al público adecuado.'
    },
    {
        icon: CheckIcon,
        title: 'Acompañamiento constante',
        text: 'No sólo gestionamos, sino que guiamos y potenciamos tu marca.'
    }
]
function WhyLotus() {
    return (
        <Container maxW="container.xl">
            <Heading as="h2" mb={8} textAlign="center">
                ¿Por qué Lotus?
            </Heading>
            <Container maxW="container.xl" display="flex" flexDirection="row" gap={16}>
                <Box width="50%">
                    <Image src="https://placehold.co/600x400" alt="Lotus Logo" />
                </Box>
                <Box width="50%">
                    <List display="flex" flexDirection="column" gap={2}>
                    {reasons.map((reason, index) => (
                        <ListItem key={index} display="flex" flexDirection="column" gap={2} marginBottom="20px">
                            <Box fontSize="2xl" display="flex" flexDirection="row" alignItems="center" gap={2}>
                                <Icon as={reason.icon} />
                                <Text fontWeight="bold">{reason.title}</Text>
                            </Box>
                            <Text>{reason.text}</Text>
                        </ListItem>
                    ))}
                </List>
                </Box>
            </Container>
        </Container>
    )
}

export default WhyLotus;