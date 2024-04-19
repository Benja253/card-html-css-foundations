
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 7%)',
        grey: 'hsl(0, 0%, 50%)',
      },
      fontFamily: {
        'figtree': 'Figtree'
      },
      backgroundImage: {
        'img-header': "url('/assets/images/illustration-article.svg')"
      },
      boxShadow: {
        'card': '0.5em 0.5em black'
      }
    },
  },
  plugins: [],
}