import type {Config} from 'tailwindcss';

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

      fontSize: {
        xs: '12px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '56px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
