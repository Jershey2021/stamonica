/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}", 

    // Exclude specific files
    "!./src/Login/Login.jsx",
    "!./src/Register/Register.jsx",
    "!./src/Register/Register.css",
    "!./src/Login/Login.css",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow-box': '0px 0px 0px 5px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
