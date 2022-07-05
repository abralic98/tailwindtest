/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "500px",
      lg: "1024px",
      xl: "1366px",
    },
    padding: {
      sm: "24px",
      lg: "56px",
    },
    extend: {
      colors: {
        kodiusBlue: "#118DD6",
      },
    },
    fontSize: {
      bigTitleXl: "100px",
      bigTitleLg: "80px",
      bigTitleMd: "50px",
      bigTitleSm: "40px",
      textSm: "16px",
      textMd: "18px",
      textXl: "20px",
    },
    fontFamily: {
      MuseoSansRegularLight: "MuseoSans",
      FuturaPTBold: "FuturaPTBold",
    },
  },
  plugins: [],
};
