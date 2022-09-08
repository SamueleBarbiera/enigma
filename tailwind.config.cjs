/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    plugins: [
        require('@tailwindcss/forms'),
        require('prettier-plugin-tailwindcss'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],

    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: true,
        prefix: '',
        darkTheme: 'dark',
    },
    theme: {
        container: {
            center: true,
        },
        screens: {
            xsm: '300px',
            sm: '400px',
            smd: '450px',
            md: '550px',
            xsmd: '650px',
            xmd: '715px',
            xlmd: '800px',
            lg: '924px',
            xl: '1200px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins', 'sans-serif'],
            },
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
        },
    },
    variants: {
        outline: ['focus'],
    },
}
