/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4080f2",
          secondary: "#943ce3",
        },
        black: {
          main: "#000000",
          off: "#0D2436",
          secondary: "#1A2B6B",
        },
        white: {
          main: "#ffffff",
          secondary: "#DFE7FB",
          off: "#F5F7FD",
          ghost: "#EEEEFF",
        },
        yellow: {
          main: "#FBD72B",
        },
        orange: {
          main: "#F9484A",
        },
      },
      boxShadow: {
        main: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        cards: "20px 20px 43px #e8e8e8,20px -20px 43px #ffffff",
        circle: "354px 354px 354px",
        peerCards: "4px 17px 92px -40px rgba(91,19,218,0.8)",
      },
      borderRadius: {
        oval: "31% 69% 75% 25% / 30% 48% 52% 70%",
      },
      dropShadow: {
        text: "4px 3px 5px rgba(19,14,14,0.6)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
