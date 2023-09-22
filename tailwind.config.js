/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        //branding
        primary: '#F59E0B',
        'primary-light': '#FBBF24',
        'primary-dark': '#D97706',

        secondary: '#d97706',
        'secondary-light': '#FBBF24',
        'secondary-dark': '#B45309',

        window: '#1D3557',

        background: '#1F2937',

        //gold
        'gold-400': '#FBBF24',
        'gold-500': '#F59E0B',
        'gold-600': '#D97706',
        'gold-700': '#B45309',
        'gold-800': '#92400E',
        'gold-900': '#78350F',
        'gold-1000': '#5F2F0F',

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

// blue-400 = #60A5FA
// blue-500 = #3B82F6
// blue-600 = #2563EB
// blue-700 = #1D4ED8
// blue-800 = #1E40AF
// blue-900 = #1E3A8A
// blue-1000 = #1D3557
// blue-1100 = #1E293B

// gold-ish casino color sceme
// yellow-400 = #FBBF24
// yellow-500 = #F59E0B
// yellow-600 = #D97706
// yellow-700 = #B45309
// yellow-800 = #92400E
// yellow-900 = #78350F
