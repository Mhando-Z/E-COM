/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1446px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
