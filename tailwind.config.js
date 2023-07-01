/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#6DD5B5",
          200: "#54BB9C",
          300: "#439179",
          400: "#004B47",
        },
        red: {
          100: "#F17471",
          200: "#F34B4C",
          300: "#A51D1E",
        },
        neutral: {
          100: "#FFEAD2",
        },
      },
      fontFamily: {
        alstoria: "Alstoria",
        creato: "Creato Display",
      },
    },
  },
  plugins: [],
};
