const path = require('path');
const fs = require('fs');

const APP_DIR = fs.realpathSync(process.cwd());

const resolveAppPath = relativePath => path.resolve(APP_DIR, relativePath);

module.exports = {
  entry: resolveAppPath('src'),
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        use: { 
          loader: 'babel-loader' ,
          options: {
            "presets": [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            "plugins": [
              [
                "@babel/plugin-proposal-class-properties"
              ]
            ]
          }
        }
      },
      { test: /\.css$/,  use: [ 'style-loader', 'css-loader'] },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    ]
  }
}