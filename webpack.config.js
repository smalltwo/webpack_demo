/*
* @Author: penghongjie
* @Date:   2017-01-11 14:32:47
*/
var path = require('path')
var webpack = require('webpack')

var config = {
    entry: {
        first: ['./src/index.js']
    },
    output: {

        path: __dirname + "/dist",
        publicPath: "",
        filename: "[name]-bundle.js"
    },
    module: {
        noParse: '',
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    devServer: {
        contentBase: 'dist',
        port: 8080,
        inline: true,
    },
    resolve: {
        extensions: ["", ".js", ".scss"]

    },
    debug: true,
    devtool: "eval-source-map"
}

module.exports = config