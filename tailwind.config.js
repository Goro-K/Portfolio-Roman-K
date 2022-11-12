/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        primary: 'rgba(0,0,0,.4)',
      }),
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
