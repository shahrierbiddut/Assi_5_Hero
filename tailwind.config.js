/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./home.html",
        "./script.js",
        "./search.js",
        "./modal.js",
        "./login.js"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#667eea',
                secondary: '#764ba2',
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease-in',
                slideIn: 'slideIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            spacing: {
                'safe': 'max(1rem, env(safe-area-inset-bottom))',
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
            },
            borderRadius: {
                sm: '0.375rem',
                base: '0.5rem',
                md: '0.75rem',
                lg: '1rem',
                xl: '1.5rem',
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light', 'dark'],
        darkMode: ['class', '[data-theme="dark"]'],
        base: true,
        styled: true,
        utils: true,
        logs: true,
    },
}