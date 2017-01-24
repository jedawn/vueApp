module.exports = {
    entry:'./index.js',
    output:{
        path:'./',
       /* publicPath:'./dist/',*/
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
                options: {
                    loaders: {
                        'scss': 'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test:/.css$/,
                loader:'style-loader!css-loader'
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
                loader:'style-loader!sass-loader!css-loader'
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}