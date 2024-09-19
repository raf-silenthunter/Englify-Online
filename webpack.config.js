const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: './src/index.js',
      rodo: './src/rodo.js' 
    },
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'images/')
      },
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].bundle.js',
      publicPath: '/', 
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
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },        
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
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
      new MiniCssExtractPlugin({
        filename: 'css/[name].css', 
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'html/index.html', 
        chunks: ['main'], 
      }),
      new HtmlWebpackPlugin({
        template: './public/rodo.html', 
        filename: 'html/rodo.html',
        chunks: ['rodo'], 
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      historyApiFallback: {
        rewrites: [
          { from: /^\/$/, to: '/html/index.html' },
          { from: /^\/rodo$/, to: '/html/rodo.html' },
        ],
      },
      compress: true,
      port: 9000,
      hot: true,
    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 350000,
      maxAssetSize: 350000,
    },
  };
};
