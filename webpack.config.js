var webpack = require('webpack');
module.exports = {
    entry:'./index.js',
    output:{
        path:'./',
        filename:'bundle.js'
    },
    loaders:[
        {
            test:'/\.js$/',
            loader:'babel',
            exclude: /node_modules/
        },
        {
            test:'/\.vue$/',
            loader:'vue'
        },
        {
            test:'/.css$/',
            loader:'css-loader'
        }
    ],
    babel: {
        presets: ['es2015']
    }
}