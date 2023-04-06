const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    // making a request to localhost8080/api/
    devServer: {
        proxy: {
            '/api/': 'http://localhost:3000',
        },
    },
    // proxy is how they listen to each other
    // if you ever see /api, direct to localhost 300
    //  "/api/": local host 3000
};
