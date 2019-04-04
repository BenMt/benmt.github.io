import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.63,
  scaleRatio: 2,
  headerFontFamily: ['Raleway', 'Helvetica Neue', 'Arial', 'sans-serif'],
  headerWeight: 400,
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400']
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i']
    }
  ]
})

export default typography
