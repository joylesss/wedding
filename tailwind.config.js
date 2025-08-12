/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xxs': '360px',
                'xs': '480px',
            }
        },
    },
    plugins: [],
}
