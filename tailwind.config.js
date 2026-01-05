module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5722", 
        secondary: "#4caf50",
        background: "#ffffff",
        customText: "#000000"
      },
      fontFamily: {
        heading: ["Arial, sans-serif"],
        body: ["Helvetica, sans-serif"]
      },
      borderRadius: {
        'custom': "4px"
      },
      spacing: {
        'base': "8px"
      }
    },
  },
  plugins: [],
}