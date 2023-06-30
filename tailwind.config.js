/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eef1f8",
        secondary: "#2F99D4",
        priBg: "#F5E6FE",
        priText: "#6C7D98",
        darkBg: '#1E1E2E',
        darkBgSec: '#27293D',
        'primary-text': "#8996AC",
        'secondary-text': "#1C3E77",
        'success': "#25D366",
        'pending': "#1C3E77",
        'failed': "#F16E6E",
        'border': "#F2F2F2"
      },
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
        grotesk: ["Clash Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}