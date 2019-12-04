const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: "#@cheap-eval-source-map",
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        publicPath: "/",
        port: 8080,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});


module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
});