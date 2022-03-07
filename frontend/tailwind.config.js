module.exports = {
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
    content: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
        options: {
            safelist: [],
        },
    },
    theme: {
        screens: {
            sm: '370px',
            smd: '410px',
            md: '538px',
            xmd: '715px',
            xlmd: '800px',
            lg: '924px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            spacing: {
                94: '22rem',
                120: '30rem',
                128: '32rem',
                127: '33.7rem',
                129: '36rem',
                130: '38.5rem',
                132: '40rem',
                144: '42rem',
                152: '56rem',
                165: '64rem',
                182: '71rem',
            },
            colors: {
                beige: {
                    50: '#fcfaf9',
                    100: '#f8f5f2',
                    200: '#eee5df',
                    300: '#dac1a0',
                    400: '#caae99',
                    500: '#bc987e',
                    600: '#a98971',
                    700: '#8d725f',
                    800: '#715b4c',
                    900: '#5c4a3e',
                },
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                '4xl': '0 5px 8px 0px rgba(0, 0, 0, 0.3)',
            },
        },
    },
}
