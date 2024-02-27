import type {Config} from 'tailwindcss';

const round = {
  '10px': '10px',
  '50': '50px',
  '100': '100px',
  '200': '200px',
  '300': '300px',
  '400': '400px',
  '500': '500px',
};

const config: Config = {
  darkMode: ['class'],

  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/forms/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: round,
      margin: round,
      height: {
        'button-lg': '60px',
        'button-md': '50px',
        'button-sm': '40px',
      },
      colors: {
        'themed-black': {
          primary: '#262626',
        },
        'themed-grey': {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#9CA3AF',
        },
      },

      letterSpacing: {
        tighter: '-0.07rem',
        tight: '-0.048rem',
        wide: '0.001rem',
        wides: '0.0015rem',
      },

      fontSize: {
        xs: '12px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '56px',
        caption: '14px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
