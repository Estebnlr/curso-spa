const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/styles/styles.css', to: '' }
      ],
    }),
  ]
};


// falla en conectar estilos
// npm install copy-webpack-plugin@^6.4.1
// Esto instalará la versión 6.4.1 que es compatible con la configuración que te he proporcionado. Después de hacer esta instalación, intenta ejecutar nuevamente tu script de construcción (npm run build).