/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dce8ff',
          200: '#bfd5ff',
          300: '#93b8ff',
          400: '#5f92ff',
          500: '#3a6cf6',
          600: '#254fe8',
          700: '#1637c6',
          800: '#162d97',
          900: '#15296f',
          950: '#0d1742',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
