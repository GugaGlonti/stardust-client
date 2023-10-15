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
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
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
