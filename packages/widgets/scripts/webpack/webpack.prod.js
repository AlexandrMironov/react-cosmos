const webpack = require('webpack');
const configure = require('./webpack');

const config = configure({
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
    ],
    optimization: {
        minimizer: []
    }
});

config.entry.vendor = ['react', 'react-dom'];
module.exports = config;
