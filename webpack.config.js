/*
* @Author: penghongjie
* @Date:   2017-01-11 14:32:47
*/
var path = require('path')
var webpack = require('webpack')

var config = {
    entry: {
        home: './home',
        about: './about'
    },
    output: {

        path: __dirname + "/dist",
        filename: "[name]-[chunkhash:8].js"
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
    plugins: {

    },
    resolve: {
        extensions: ["", ".js", ".scss"],
        alias: {

        },

    },
    debug: true,
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./src"
    }
}

module.export = config