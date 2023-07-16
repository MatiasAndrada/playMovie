/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Archivos JavaScript y TypeScript
    './public/index.html', // Archivo HTML principal
  ],
  theme: {
    extend: {
      extend: {
        display: ["hover"],
      },
    },
  },
  plugins: [],
}

