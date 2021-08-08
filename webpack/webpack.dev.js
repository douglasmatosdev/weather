const path = require("path")
const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "..", "dist"),
        filename: "[name].bundle.js",
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "..", "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
})