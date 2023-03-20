/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'raw': '(min-height: 640px)' },
        // => @media (min-height: 640px) { ... }
        'xxs': { 'raw': '(min-height: 400px)' },
        // => @media (min-height: 400px) { ... }
      }
    },
    // screens: {
    //   'xxs': '359px', // min-width
    // },
  },
  plugins: [],
}