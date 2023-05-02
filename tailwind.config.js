/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: {
          DEFAULT: '#3182F6',
          100: '#F5F9FF',
          200: '#C4DBFC',
          300: '#93BEFA',
          400: '#63A0F8',
          500: '#3182F6',
          600: '#0A66EB',
          700: '#0851BA',
          800: '#063C89',
          900: '#042658',
        },
      },
    },
  },
  plugins: [],
};
