/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      'black': '#000',
      'white': '#FFF',
      'cyan/300': '#9BE1FB',
      'cyan/500': '#81D8F7',
      'gray/900': '#121214',
      'gray/800': '#202024',
      'gray/400': '#7C7C8A',
      'gray/200': '#C4C4CC',
      'gray/100': '#E1E1E6',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
