/*
* @Author: penghongjie
* @Date:   2017-02-15 14:51:29
*/
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require("./webpack.config.js");
config.entry.first.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);


var server = new WebpackDevServer(compiler, {
        contentBase: 'dist',
        port: 8080,
        inline: true,
        // hot: true,
});
server.listen(8080, function() {
    console.log('port:8080')
});