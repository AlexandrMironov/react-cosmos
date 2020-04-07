const path = require('path');
const merge = require('webpack-merge');
const pkg = require('./../../package.json');
const libraryName = pkg.name;

module.exports = configure;

const BASE_PATH = path.join(__dirname, '../..');
const APPS_PATH = path.join(__dirname, '../..', 'src');

const components = require('../components');

const config = {
  entry: Object.assign({ index: './index' }, components.maps),
  output: {
    path: path.resolve(BASE_PATH, 'dist'),
    publicPath: '/',
    chunkFilename: '[name].js',
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  context: APPS_PATH,
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=../../styleguide/fonts/[name].[ext]',
          },
        ],
      },
    ],
  },
  plugins: [],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  },
  performance: {
    hints: false,
  },
  stats: {
    children: false,
  },
};

function configure(options) {
  return merge(config, options);
}

configure.BASE_PATH = BASE_PATH;
configure.APPS_PATH = APPS_PATH;
