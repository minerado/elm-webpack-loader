const path = require('path')
const webpack = require('webpack')


module.exports = {
    entry: {
        bundle: './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, './builds'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            {
                use: 'elm-webpack-loader',
                test: /\.elm$/,
            },
        ],
    },
}
