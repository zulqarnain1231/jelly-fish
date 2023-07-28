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
          secondary: "#1A2B6B",
        },
        white: {
          main: "#ffffff",
          off: "#F5F7FD",
        },
      },
      boxShadow: {
        main: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        cards: "20px 20px 43px #e8e8e8,20px -20px 43px #ffffff",
      },
      dropShadow: {
        text: "10px 10px 164px -6px rgba(19, 65, 211, 0.86)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
