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
    'flex-wrap',
    'justify-center', 
    'items-center', 
    'text-center', 
    'object-cover', // Added for images
    'max-w-[330px]', 'sm:max-w-[300px]', // Added for specific max-width classes
    'hover:shadow-[-7px_7px_0px_#000000]', // For hover shadow
    'border', 'border-black', 'shadow-[-7px_7px_0px_#000000]', // For borders and shadows
    'gap-1', 'gap-y-10', 'xl:mx-24', // Gap classes
    'hidden', 'sm:block', 'sm:w-[80%]', // Hidden for small screens
    'max-w-[500px]', 'scale-75', 'sm:scale-100', // For scaling and max-width in forms
    'mb-16', 'sm:text-base', 'text-xs', 'text-lg', // Adjusted text sizes
    'sm:w-auto', 'sm:w-[130px]', 'w-[120px]', // Adjusted responsive widths
  ],
  plugins: [],
};
