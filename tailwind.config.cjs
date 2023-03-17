/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        baloo: '"Baloo 2", sans-serif'
      },
      colors: {
        yellow: { 
          normal: '#DBAC2C', 
          dark: '#C47F17',
          light: '#F1E9C9'
        },
        purple: { 
          normal: '#8047F8', 
          dark: '#4B2995',
          light: '#EBE5F9'
        },
        base: {
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4D',
          label: '#8D8686',
          hover: '#D7D5D5',
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2'
        },
        white: '#FFFFFF',
        background: '#FAFAFA'
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")()
  ],
}