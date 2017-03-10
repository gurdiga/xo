var path = require('path');

module.exports = {
    entry: `mocha-loader!${path.resolve("./test/main.js")}`,
    output: {
        filename: "./test/bundle.js"
    },
    resolve: {
        alias: {
            app: path.resolve("./app"),
            test: path.resolve("./test")
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

