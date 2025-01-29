/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rg-gradient': 'linear-gradient(var(--rg-gradient-angle, 96deg), #d1fbff 0%, #75cfff 29.13%, #978aff 70.56%)',
      },
    },
  },
  plugins: [],
}

