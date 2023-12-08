'use strict';

const path = require('path');

module.exports = {
    entry: './src/js/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './src/js'),
    },

    mode: 'development',
    watch: true,
    devtool: 'source-map',
};