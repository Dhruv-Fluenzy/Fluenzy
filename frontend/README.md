##Tailwind Configuration with vite## 

npm create vite@latest ./
cd my-project

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



//////////////////////
npm i framer-motion
npm i lucide-react

/////////////////////
ShadCN UI Library
npx shadcn@latest init
  npm install -D @types/node