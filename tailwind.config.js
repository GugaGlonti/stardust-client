/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      hd: '1536px',
      wide: '1920px',
    },
    extend: {
      spacing: {
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '10vh': '10vh',
        '7vh': '7vh',
        '5vh': '5vh',

        '00vh': '90vh',
        '80vw': '80vw',
        '70vw': '70vw',
        '60vw': '60vw',
        '50vw': '50vw',
        '40vw': '40vw',
        '30vw': '30vw',
        '20vw': '20vw',
        '10vw': '10vw',
        '7vw': '7vw',
        '5vw': '5vw',
      },
      colors: {
        //branding
        primary: '#c084fc',
        'primary-light': '#a855f7',
        'primary-dark': '#8b5cf6',

        secondary: '#f472b6',
        'secondary-light': '#ec4899',
        'secondary-dark': '#db2777',

        window: '#1D3557',
        'window-light': '#1E293B',
        'window-dark': '#1D2433',

        background: '#1F2937',

        username: '#4ade80',

        'gold-light': '#fcd34d',
        gold: '#fbbf24',
        'gold-dark': '#f59e0b',

        'joker-bg-light': '#2D9C5A',
        'joker-bg': '#288F5A',
        'joker-bg-dark': '#1F7C4F',

        //grays
        dark: '#1F2937',
        'dark-light': '#6B7280',
        'dark-dark': '#111827',
        light: '#F9FAFB',
        'light-light': '#F3F4F6',
        'light-dark': '#E5E7EB',

        //logging
        danger: '#EF4444',
        'danger-light': '#FECACA',
        'danger-dark': '#DC2626',
        success: '#10B981',
        'success-light': '#A7F3D0',
        'success-dark': '#059669',
        warning: '#F59E0B',
        'warning-light': '#FDE68A',
        'warning-dark': '#B45309',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
