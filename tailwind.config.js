module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-focus'],
      textDecoration: ['focus-visible'],
    },
  },
  plugins: [],
};
