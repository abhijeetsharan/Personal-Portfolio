/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shine: {
          '0%': {'background-position': '100%'},
          '100%': {'background-position': '-100%'}
        },
      },
      animation: {
        gradient: 'gradient 10s ease infinite',
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
}