// babel.config.js
// babel.config.js
module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        // "@babel/react",
        "@babel/typescript"
    ],
    env: {
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs"]
        }
    }
}
// {
//     "presets": [
//         "@babel/env",
//         "@babel/react",
//         "@babel/typescript"
//     ]
// }