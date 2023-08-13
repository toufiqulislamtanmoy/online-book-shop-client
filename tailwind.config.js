/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#6C63FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Kaushan: ['Kaushan Script', 'cursive'],
        Poppins: ['Poppins', 'sans-serif'],
        Pacifico : ['Pacifico', 'cursive']
      },
    },
  },
  plugins: [require("daisyui")],
}

