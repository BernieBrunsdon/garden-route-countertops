/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E0F16',
        accent: '#D4A24C',
        light: '#FFFFFF',
        stone: {
          charcoal: '#1A1B23',
          slate: '#3A3B45',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(212, 162, 76, 0.25)',
      },
      backgroundImage: {
        'marble-texture': "url('/materials/marble-gold.jpg')",
        'hero-gradient':
          'linear-gradient(135deg, rgba(14,15,22,0.92), rgba(14,15,22,0.6))',
      },
    },
  },
  plugins: [],
};

