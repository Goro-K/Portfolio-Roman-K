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
        "400px": "400px",
        "60vh" : "60vh",
        "100vh": "100vh",
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
        appear: "appear 1.3s ease-in-out forwards",
      },
      colors: {
        lightBg: "#fffffe",
        lightHeadline: "#2b2c34",
        lightButton:"#6246ea",
        lightGallery: "#d1d1e9",
        lightBtnGallery: "#3da9fc",
        darkBg: "#16161a",
        darkHeadline: "#fffffe",
        darkButton: "#7f5af0",
        darkParagraph: "#94a1b2",
        darkGallery:"#242629",
        darkBtnGallery: "#078080"
      }
    },
  },
  plugins: [],
};
