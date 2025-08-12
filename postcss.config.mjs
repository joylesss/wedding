const config = {
  plugins: [
      "@tailwindcss/postcss",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '360px',
        'xs': '480px',
      }
    }
  }
};

export default config;
