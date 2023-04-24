export default {
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      dropShadow: {
        "4xl": ["0 0 40px #00000", "0 0 40px #00000"],
        yellow: [
          "0 0 40px #FFCB2A",
          "0 0 40px #FFCB2A",
          "0 0 40px #FFCB2A",
          "0 0 40px #FFCB2A",
        ],
      },
      backgroundImage: {
        "popup-left": "url('/images/LeftPop.png')",
        "popup-right": "url('/images/RightPop.png')",
      },
      colors: {
        primary: "#FFCB2A",
        primaryContrast: "#F9BC02",
        secondary: "",
        secondaryContrast: "",
        darkGray: "#747F83",
        darkGrayContrast: "#667276",
        gray: "#C0C1C6",
        grayContrast: "#A3A4A9",
        black: "#000000",
        white: "#ffffff",
        blackGray: "#202E31",
      },
    },
  },
};
