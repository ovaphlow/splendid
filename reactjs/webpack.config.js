const { resolve } = require('path')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    'index': './src/index.js',
    
    'mgr.register': './src/mgr.register.js',
    'mgr.login': './src/mgr.login.js',
    'mgr.index': './src/mgr.index.js'
  },

  // devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
    ]
  },

  output: {
    path: resolve(__dirname, './public/assets/js'),
    filename: '[name].js'
  },
}
