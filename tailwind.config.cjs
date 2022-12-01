module.exports = {
  content: [
    "./components/**/*.{vue,js,ts,md}",
    "./layouts/**/*.{vue,js,ts,md}",
    "./content/**/*.{vue,js,ts,md}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["serif"],
      mono: ["monospace"],
    },
  },
};
