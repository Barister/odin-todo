const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   devtool: 'source-map',
   entry: './src/app.js',
   plugins: [
      new HtmlWebpackPlugin({
         title: 'The Odin ToDo',
         template: './src/index.html',
         favicon: './src/favicon.ico',
      }),
   ],
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'img/[hash][ext][query]',
      clean: true,
   },
   devServer: {
      static: './dist',
      port: 9000,
      hot: true,
      open: true,
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
      ],
   },
   devServer: {
      static: {
         directory: path.resolve(__dirname, 'dist'),
      },
      port: 9000,
      hot: true,
      open: true,
   },
};