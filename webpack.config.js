/*
* @Author: penghongjie
* @Date:   2017-01-11 14:32:47
*/
var path = require('path')
var webpack = require('webpack')

var config = {
    entry: {
        first: './src/pages/index.js'
    },
    output: {

        path: __dirname + "/dist",
        filename: "[name]-bundle.js"
    },
    module: {
        noParse: '',
        loaders: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                loader: 'babel',
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".scss"],
        alias: {

        },

    },
    debug: true,
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./src",
        inline: true,
        hot: true,
        port: 8080,
    }
}

module.export = config