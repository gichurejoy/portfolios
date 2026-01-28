/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
        "./index.tsx"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
                space: ['Space Grotesk', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            colors: {
                cream: '#fcfbf9',
                emerald: {
                    500: '#10b981'
                }
            },
            borderRadius: {
                'organic': '200px 10px 10px 200px',
                'organic-rev': '10px 200px 200px 10px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scan': 'scan 3s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(500%)' },
                }
            }
        },
    },
    plugins: [],
}
