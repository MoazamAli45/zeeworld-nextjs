/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { "home-img": "url('/images/background.jpg')" },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "rgba(0, 174, 239, 1)",
        grey: "rgba(99, 115, 129, 1)",
        secondary: "rgba(0, 26, 35, 1)",
        green: "rgba(180, 211, 51, 1)",
      
      },
      transitionTimingFunction: {
        "in-expo": {
          ease: ".25,.1,.25,1",
          linear: "0,0,1,1",
          "ease-in": ".42,0,1,1",
          "ease-out": "0,0,.58,1",
          "ease-in-out": ".42,0,.58,1",
        },
      },
      screens: {
        "1xl": "900px",
        sm: "240px",
        xs: "600px",
        'xxs':"780px",
        "1xs": "400px",
      },
    },
  },
  plugins: [],
};
