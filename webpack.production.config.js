var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const SERVICE_WORKER_NAME = 'service-worker.js';
const PRECACHE_ID = 'cs-react-v1-1';
const ROOT_URL = 'https://casualsparks.com/';

loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader', 
    use: 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!postcss-loader!sass-loader?outputStyle=expanded'}),
  exclude: ['node_modules']
});

module.exports = {
  // entry: [
  //   './src/index.js',
  //   './styles/index.scss',
  // ],
   entry: {
    main: path.resolve(__dirname, 'src'),
  },
  output: {
    publicPath: '',		
    path: path.join(__dirname, 'public'),
    filename: '[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  plugins: [
      new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      }
    }),
      new SWPrecacheWebpackPlugin({
      cacheId: PRECACHE_ID,
      filename: SERVICE_WORKER_NAME,
      minify: true,
      mergeStaticsConfig: true,
      navigateFallback: ROOT_URL + 'index.html',
      debug:true,
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new WebpackCleanupPlugin({exclude: [SERVICE_WORKER_NAME, 'CNAME']}),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),

  ]
};
