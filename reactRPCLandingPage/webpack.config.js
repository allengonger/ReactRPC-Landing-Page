const path = require('path');
//const html = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,

    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {

                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
         
   {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    devServer: {
        publicPath: '/dist/',
        proxy: {
            '/' : 'http://localhost:3000'
        }
    },
    mode: process.env.NODE_ENV
};