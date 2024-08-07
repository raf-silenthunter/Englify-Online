const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: './src/index.js',
      rodo: './src/rodo.js' // Punkt wejściowy dla strony RODO
    },
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'images/')
      },
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js', // Użycie [name] dla różnych punktów wejściowych
      publicPath: '/', // Ustawienie publicPath
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, 
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true,
          },
        }),
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        chunks: ['main'], // Włączenie tylko main.bundle.js
      }),
      new HtmlWebpackPlugin({
        template: './public/rodo.html', // Szablon HTML dla strony RODO
        filename: 'rodo.html',
        chunks: ['rodo'], // Włączenie tylko rodo.bundle.js
      })
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      historyApiFallback: {
        rewrites: [
          { from: /^\/rodo$/, to: '/rodo.html' },
        ],
      },
      compress: true,
      port: 9000,
    },
  };
};
