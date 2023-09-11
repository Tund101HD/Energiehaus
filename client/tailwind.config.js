/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'mobile': '300px',
            ...defaultTheme.screens,
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
            "20": "20px",
        },
        extend: {
            padding : {
                '50p' : "50%",
                '10p' : "10%",
            },
            colors : {
                "black-t-50" : "rgb(0,0,0,.5)",
                "black-t-30" : "rgb(0,0,0,.3)",
                "box-bg" : "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
                "box-border": "rgba(255, 255, 255, 0.18)",
                "native-green": "#009688",
                "native-green-hover": "#08524a"

            },
            spacing : {
                '200p' : "200%",
                '175p' : "175%",
                '160p' : "160%",
                '150p' : "150%",
                '140p' : "140%",
                '135p' : "135%",
                '130p' : "130%",
                '125p' : "125%",
                '120p' : "120%",
                '110p' : "110%",
                '100p' : "100%",
                '95p' : "95%",
                '85p' : "85%",
                '75p' : "75%",
                '65p' : "65%",
                '50p' : "50%",
                '40p' : "40%",
                '30p' : "30%",
                '25p' : "25%",
                '20p' : "20%",
                '15p' : "15%",
                '10p' : "10%",
                '8p' : "8%",
                '6p' : "6%",
                '1/5' : "20%",
                '13p' : "13%",
                '100' : "32rem",
                '200' : "40rem",
                '250' : "50rem",
                '300' : "70rem",
                '400' : "128rem",
                '500' : "170rem",
                '600' : "220rem",
                'fullF' : "calc(100vw - 16px);",
            },
        },
    },
    plugins: [
    ],
}


