module.exports = {
    entry:'./index.js',
    output:{
        path:'./',
        filename:'bundle.js'
    },
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
            },
            {
                test:/.css$/,
                loader:'css-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}