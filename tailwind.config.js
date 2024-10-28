/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1280px',
      'sm': '375px'
    },
    extend: {
    },
  },
  plugins: [],
}

