module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#F2F2F2",
        dark: "#222",
        primaryLight: "#D294FF",
        primaryDark: "#7700CC",
        secondary: "#3b3b3b",
      },
      borderWidth: {
        1: "1px",
      },
      minWidth: {
        45: "180px",
        175: "700px",
      },
      height: {
        dvh: "100dvh",
      },
      animation: {
        "slide-in-left": "slide-in-left 0.3s",
        "slide-in-right": "slide-in-right 0.3s",
        "settings-rotate-left": "settings-rotate-left 0.3s",
        "settings-rotate-right": "settings-rotate-right 0.3s",
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(60px)",
            opacity: "0",
          },
          "30%": {
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
          "30%": {
            opacity: "0",
          },
          "100%": {
            transform: "translateX(60px)",
            opacity: "0",
          },
        },
        "settings-rotate-left": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-45deg)",
          },
        },
        "settings-rotate-right": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(45deg)",
          },
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
