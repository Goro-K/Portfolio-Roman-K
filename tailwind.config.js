/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        primary: 'rgba(0,0,0,.4)',
      }),
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      height: {
        "500px": "500px",
        "400px": "400px"
      },
      width: {
        "400px": "400px"
      },
    },
  },
  plugins: [],
};
