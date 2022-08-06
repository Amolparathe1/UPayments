import {createBox, createText, useTheme as useReTheme} from '@shopify/restyle';

export const theme = {
  colors: {
    primary: '#2CB9B0',
    white: '#fff',
  },
  spacing: {
    xxs: 3,
    xs: 6,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 50,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: 'white',
      textAlign: 'center',
    },
    header: {
      fontSize: 24,
      lineHeight: 30,
      color: 'white',
    },
    text14: {
      fontSize: 14,
      lineHeight: 20,
      color: 'white',
    },
  },

  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
//export default theme;
