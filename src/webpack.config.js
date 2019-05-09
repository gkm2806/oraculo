const path = require('path');
module.exports = {
    loader: 'css-loader',
    options: { 
      modules: true
    },
    devServer: {
      historyApiFallback: true
    }
  }