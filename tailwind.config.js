module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-1deg)'},
          '50%': {transform: 'rotate(2.5deg)'},
        }
      },
      animation: {
        wiggle: 'wiggle 15s ease-in-out infinite'
      },
      backgroundColor: ['active'],
      textColor: ['active'],
      colors: {
        blue: {
          DEFAULT: '#6399AE',
          light: '#00C2CB',
          dark: '#1B2434',
          darker: '#141E30'
        },
      },
      boxShadow: {
        '2xl-light': '0 0 50px -20px rgba(255, 255, 255, 0.15)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}