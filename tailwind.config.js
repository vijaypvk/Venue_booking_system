/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      keyframes: {
        moveRed: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
    animation: {
      "move-red": "moveRed 1.5s ease-in-out infinite",
      
    },
  
  },
  },
  

  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }),
    // ... other plugins
  ]
}
