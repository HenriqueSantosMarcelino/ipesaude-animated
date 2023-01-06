import colors from 'native-base/src/theme/base/colors'
import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  shadows: {
    box: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 7.27,      
    },
    
    items: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.07,
      shadowRadius: 2.27, 
    },
  },
  
  
  colors: {
    orange: {
      500: '#f07e26', //PANTONE 158C
      100: '#ccc'
    },
    green: {
      100: '#adcc53', //PANTONE 2298C
      500: '#7aa62c', //PANTONE 4212C
      600: '#125428' //PANTONE 3435C
    },
    white: '#FFFFFF',
    gray: {
      200: '#fbfbfb',
      250: '#f8f8f8',
      300: '#d4d4d4',
      500: '#706f6f',
      800: '#3c3c3b'
    },
  },

  fontConfig: {
    Poppins: {      
      500: {
        normal: 'Poppins_500Medium'
      },
      600: {
        normal: 'Poppins_600SemiBold'
      },  
    },    
    Roboto: {
      400: {
        normal: 'Roboto_400Regular'
      },
      500: {
        normal: 'Roboto_500Medium'
      },
      700: {
        normal: 'Roboto_700Bold'
      },
      900: {
        normal: 'Roboto_900Black'
      }
    },
    Inconsolata: {
      400: {
        normal: 'Inconsolata_400Regular'
      },
      500: {
        normal: 'Inconsolata_500Medium'
      },
      600: {
        normal: 'Inconsolata_600SemiBold'
      }
    }
  },

  fonts: {
    heading: 'Poppins_600SemiBold',
    title: 'Poppins_500Medium',
    title2: 'Roboto_500Medium',
    complement: 'Roboto_400Regular',
    virtualCard: 'Inconsolata'
  },    
})
