import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e8e6f0',  // Tonos más claros
      100: '#c7bfd9',
      200: '#a796c2',
      300: '#8770ac',
      400: '#6e5795',
      500: '#605580',  // Color principal
      600: '#4f446c',
      700: '#3e3657',
      800: '#2e2842',
      900: '#1d1a2d',  // Tonos más oscuros
    },
    secondary: '#C94F7C',
    accent: '#FFB945',
    neutralLight: '#F3F3F3',
    neutralDark: '#2E2E2E',
  },
  button: {
    backgroundColor: 'primary.500',
    color: 'white',
    _hover: {
      backgroundColor: 'primary.600',
    },
  },
});

export default theme;
