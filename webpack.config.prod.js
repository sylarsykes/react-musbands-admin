const HtmlWebPackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  path = require('path')

const environment = process.env.NODE_ENV || 'production'

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry:  [path.join(path.join(__dirname, 'src'), 'index.tsx')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist'),
    // historyApiFallback: true,
    open: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: environment === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
        ]
      },
      { test: /\.tsx?$/, exclude: /(node_modules|bower_components)/, loader: 'ts-loader'},
      { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre'}
    ]
  },
  node: {
    console: true,
	  __dirname: true,
  },
  plugins:[
    new HtmlWebPackPlugin({template: './public/index.html', filename: 'index.html'}),
    new MiniCssExtractPlugin({template: './public/css/styles.css', filename: 'styles.css'}),
    new UglifyJsPlugin()
  ]
}
