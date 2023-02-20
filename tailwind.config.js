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
      keyframes: {
        appear: {
          "0%" : { opacity: "0"},
          "50%": { opacity: "0.5"},
          "100%": { opacity: "1"}
        }
      },
      animation: {
        appear: "appear 1.5s ease-in-out forwards"      
      }
    },
  },
  plugins: [],
};
