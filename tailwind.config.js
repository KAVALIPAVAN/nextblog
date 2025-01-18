/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    'bg-black', 
    'text-white', 
    'py-1', 
    'px-4', 
    'rounded-sm', 
    'flex', 
    'justify-center', 
    'items-center', 
    'text-center', 
    'object-cover', 
    'border', 'border-black', 'shadow-[-7px_7px_0px_#000000]', 
    'gap',
    'hidden', 'sm:block', 
     'scale', 
 
  ],
  plugins: [],
};
