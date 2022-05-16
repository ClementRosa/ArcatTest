const { withRouter } = require("next/router")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none"
      },
      borderWidth : {
        1: "1px"
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"]
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))"
      }
    },
  },
  plugins: [],
}
