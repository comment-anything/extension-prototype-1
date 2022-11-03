const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode:"production",
    entry: {
        popup: "./js/popup.js",
        background: "./js/background.js",
        tester: "./js/tests/testEntry.js"
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].js",
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "assets"}
            ]
        })
    ]
}