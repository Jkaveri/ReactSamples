var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            { test: /\.woff(\?.*)?$/, loader: 'url?prefix=fonts/&name=[name]-[md5:hash:hex:8].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[name][md5:hash:hex:8].[ext]&limit=10000&mimetype=application/font-woff2' },
            { test: /\.otf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[name][md5:hash:hex:8].[ext]&limit=10000&mimetype=font/opentype' },
            { test: /\.ttf(\?.*)?$/, loader: 'url?prefix=fonts/&name=[name][md5:hash:hex:8].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[name][md5:hash:hex:8].[ext]' },
            { test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[name][md5:hash:hex:8].[ext]&limit=10000&mimetype=image/svg+xml' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            hash: false,
            filename: "index.html",
            inject: "body",
            minify: {
                collapseWhitespace: true
            }
        })
    ]
};