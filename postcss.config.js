const config = {
  plugins: [
    require('./postcss-tasks/postcss-module-import'),
    require('postcss-extend'),
    require('postcss-mixins'),
    require('precss'),
    require('autoprefixer'),
    require('postcss-inline-svg'),
    require('postcss-color-function'),
    require('postcss-strip-units'),
    require('postcss-automath'),
    require('postcss-hexrgba'),
    // require('postcss-each')
  ]
}

// config.plugins.splice(1, 0,
//   require('./postcss-tasks/postcss-shopify-fonts')('//cdn.shopify.com/s/files/1/2403/8187/t/4/assets/')
// )

config.plugins.push(require('precss'))

module.exports = config
