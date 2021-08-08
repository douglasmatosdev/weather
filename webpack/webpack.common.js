module.exports = {
    entry: {
        index: "./src/index.tsx"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'images',
                    }
                }
            },
            {
                test: /\.(tsx|jsx|js)?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    }
}