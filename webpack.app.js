var path = require('path');

module.exports = {
    entry: "./app/main.ts",
    output: {
        filename: "./app/bundle.js"
    },
    resolve: {
        alias: {
            app: path.resolve("./app")
        },
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}

