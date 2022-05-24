const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        'index.html',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
            },
        },
    },

    //plugins: [require('@tailwindcss/forms')],
};
