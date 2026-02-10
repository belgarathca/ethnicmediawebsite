/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          primary: '#0ea5e9',
          accent: '#22d3ee'
        }
      }
    }
  },
  plugins: []
};
