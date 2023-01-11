module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-gray': '#f5f5f5',
        'gray': '#212121',
        'tint': '#1a9cb7',
        'primary': '#f57224',
        'primary-dark': '#f36d00',
        'dark-blue': '#0f1568',
        'light-gray': '#9e9e9e',
        'light-gray2': '#eff0f5',
        'menu-text': '#757575',
        'title-text': '#424242',
        'border-gray': '#d5d5d5',
      },
      width: {
        'content': '1188px',
        'w-1/8': '12.5%'
      },
      fontSize: {
        '22': '1.375rem'
      },
      dropShadow: {
        'card': '0 2px 4px 0 rgb(0 0 0 / 25%)'
      }
    },
  },
  plugins: [],
}
