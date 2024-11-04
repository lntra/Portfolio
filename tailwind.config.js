/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        "pf-black": "#03071E",
        "pf-crimsonbg": "#370617",
        "pf-darkestred": "#6A040F",
        "pf-mediumred": "#9D0208",
        "pf-red": "#D00000",
        "pf-orange": "#DC2F02",
        "pf-accent": "#FFBA08",
      },
    },
  },
  plugins: [],
}

