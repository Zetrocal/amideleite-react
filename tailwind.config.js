/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'Cabin': ['Cabin', 'Arial']
    },
    extend: {
      height:{
        
      }
    },
    colors:{
      brown: {
        100: "#54342A",
        200: "#2F1107"
      },
      cream:{
        100: "#E5E0D3DD",
        200: "#FFFBF1",
        300: "#EBDCB2",
        400: "#C9A66B",
      }
    }
  },
  plugins: [],
}

