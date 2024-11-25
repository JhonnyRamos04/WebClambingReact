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
      backgroundImage: {
        'Humbold': 'url(/PicoHumbold.jpg)',
        'PicoEspejo': 'url(/PicoEspejo.jpg)',
        'PicoElToro': 'url(/PicoElToro.jpg)',
        'PicoBond': 'url(/PicoBondpland.jpg)',
        'ClimbBg': 'url(/ClimbersBg.webp)',
        'BlogHum': 'url(/HumboldBg.jfif)',
        'BlogToro': 'url(/ElToroBg.jpg)',
        'BlogEspejo': 'url(/EspejoBg.webp)',
        'BlogBon': 'url(/BonPlandBg.jpg)'
      }
    },
  },
  plugins: [],
}

