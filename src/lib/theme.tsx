import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FED8B3','#2D3748')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  primary: '#F6AD55',
  novaLight: '#13B5EA',
  grassTeal: '#88ccca',
  novaBlue: '#00205B',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

// const video-item = {
//   display: flex !important;
//   align-items: center !important;
//   cursor: pointer;
// }

const theme = extendTheme({ config, styles, components, fonts, colors, })
export default theme

