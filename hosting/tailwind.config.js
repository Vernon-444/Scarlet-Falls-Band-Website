/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
            "./app/**/*.{js,ts,jsx,tsx}",
          ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'raisin-black': '#312A2A',
        'chocolate-cosmos': '#55011B',
        'madder': '#A0132B',
        'scarlet': '#FF220C',
        'aquamarine': '#10FFCB',
        'ghost-white': '#EBE8EE',
      }
    },
  },
  plugins: [],
}

