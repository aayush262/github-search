module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      redHat: ["'Red Hat Display'", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0.2, transform: "translateY(-20px)" },
          "80%": { opacity: 0.8, transform: "translateY(1.5px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
