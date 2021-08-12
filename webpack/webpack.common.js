const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: {
        index: "./src/index.tsx"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
        new Dotenv({
            systemvars: true
        })
    ],
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
                test: /\.(tsx|jsx|js|ts)?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    }
}