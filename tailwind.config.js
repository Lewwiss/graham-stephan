module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            dropShadow: {
                '2xl': '0 20px 20px rgba(0, 0, 0, 0.02)'
            },
            fontSize: {
                "8xl": "5.8rem"
            },
            colors: {
                slate: {
                    900: "#030b16"
                }
            },
            spacing: {
                168: "42rem",
                156: "39rem",
                144: "36rem",
                120: "30rem",
                88: "22rem",
                68: "17rem",
                18: "4.5rem"
            }
        },
    },
    plugins: [],
}