/* eslint-disable @typescript-eslint/no-var-requires */

const postcssUrl = require('postcss-url')
const postcssImport = require('postcss-import')
const postcssTailwindCss = require('tailwindcss')
const postcssNested = require('postcss-nested')
const postcssAutoPrefixer = require('autoprefixer')
const postcssCssNano = require('cssnano')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    postcssUrl,
    postcssImport,
    postcssTailwindCss,
    postcssNested,
    ...(isProduction ? [postcssAutoPrefixer] : []),
    ...(isProduction ? [postcssCssNano] : [])
  ]
}
