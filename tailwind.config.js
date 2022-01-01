
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'media',
  theme: {
    boxShadow: {
      xl: '5px 5px 5px 1px rgb(255, 103, 0)',
    },
    fontFamily: {
      'sans': 'Roboto, Arial, sans-serif',
      'serif': 'Merriweather, Georgia, serif'
    },
   
    extend: {
      colors: {
        'primary': '#ff6700',
        'roni': '#007c8f',
        'sungrey': 'rgba(0, 0, 0, 0.5)',
        'sundark': 'rgb(255, 103, 0)',
        'sunlight': 'rgb(255, 160, 0)',
        gray: {
          300: '#f0f0f0',
        },
        backgroundImage: {
          'featured': "url('/src/images/billie_holiday.png')",
        },
      }
    },
  },
  variants: {},
  plugins: [],
}