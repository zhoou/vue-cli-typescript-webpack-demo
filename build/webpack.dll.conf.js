const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: [
      'axios',
      'vue/dist/vue.esm.js',
      'vue-i18n',
      'vue-router',
      'vuex',
      'element-ui'
    ]
  },
  output: {
    path: path.join(__dirname, '../static'),
    filename: '[name].dll.js',
    library: '[name]_[hash]_library'
  },
  resolve: {
		extensions: [".js", ".jsx"]
	},
  plugins: [
    /*
      @desc: https://webpack.js.org/plugins/module-concatenation-plugin/
      "作用域提升(scope hoisting)",使代码体积更小[函数申明会产生大量代码](#webpack3)
    */
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../static', '[name].manifest.json'),
      name: '[name]_[hash]_library',
      context: __dirname
    })
  ]
}