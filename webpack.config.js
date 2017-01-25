var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 配置异步加载地址
var project_publicPath = process.env.NODE_ENV === 'production' ? __dirname + '/build/' : '/build/';
var plugins = [
    //压缩js
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    //将样式统一发布到style.css中
    new ExtractTextPlugin("style.css", {
        allChunks: true
    })
];
module.exports = {
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname)+'/build',
        filename:'bundle.js',
        publicPath:project_publicPath
    },
    devtool: '#eval-source-map',
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue',
                options: {
                    loaders: {
                        'scss': 'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test:/.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'images/[name].[ext]?[hash]'
                }
            },
            {
                test:/.s(c|a)ss$/,
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader', 'sass-loader')
            },
        ]
    },
    vue: {
        css: ExtractTextPlugin.extract("css"),
        sass: ExtractTextPlugin.extract("css!sass-loader")
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: plugins
}