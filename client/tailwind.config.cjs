/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nvidia: {
          green: "#76b900",
          ink: "#111711"
        }
      },
      borderRadius: {
        card: "8px"
      }
    }
  },
  plugins: []
};
