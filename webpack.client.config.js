const path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, './build/assets'),
        filename: 'js/app.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                configFile: './.babelrc-client'
            }
        }]
    }
};
