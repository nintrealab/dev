module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
              'battambang': ['"Battambang"','cursive','"Roboto"','sans-serif'],
              'chenla': ['"Chenla"','cursive','"Roboto"','sans-serif'],
              'dangrek': ['"Dangrek"','cursive','"Roboto"','sans-serif'],
              'kantumruy': ['"Kantumruy"','sans-serif','"Roboto"'],
              'moul': ['"Moul"','cursive','"Roboto"','sans-serif'],
              'moul-pali': ['"Moulpali"','cursive','"Poppins"','sans-serif'],
              'noto-sans-hmer': ['"Noto Sans Khmer"','sans-serif','"Roboto"'],
              'noto-serif-khmer': ['"Noto Serif Khmer"','serif','"Roboto"',''],
              'odor-mean-chey': ['"Odor Mean Chey"','serif','"Roboto"',''],
              'preah-vihear': ['"Preahvihear"','sans-serif','"Roboto"'],
              'taprom': ['"Taprom"','cursive','"Roboto"','sans-serif'],
              'en':['"Ubuntu"', 'sans-serif'],
              'poppins':['"Noto Serif Khmer","Poppins"', 'sans-serif']
            },
        },
        boxShadow: {
            'card': '0 65px 60px -1px rgba(0, 0, 0, 0.1)',
        }
    },
    presets: [require('./utils/tailwind-preset')],
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
  
};

