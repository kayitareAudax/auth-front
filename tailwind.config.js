/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'phone':{'max':'450px'},
      'tablet':'800px'
    },
    extend: {
      colors:{
        'bg-gray':"#F3F3F3",
        'gray-text':"#A7A1A1",
        'red-like':"#DA1A3C",
        'side-col':"#1a122b"
      },
      fontFamily:{
        'nav-font':'SF Mono',
      }
    },
  },
  plugins: [],
}

