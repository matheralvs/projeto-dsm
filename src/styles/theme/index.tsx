import { extendTheme } from 'native-base'

export const defaultTheme = extendTheme({
  fonts: {
    heading: 'Inter700Bold',
    body: 'Inter400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
  },
  sizes: {
    14: 56,
    '8xl': 160,
  },
})
