
var webpack = require('webpack');

module.exports = {
    entry: "./app.ts",    //main file - other files revolve around this file
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },  //anything with a .css file run through this loader
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
        ]
    }
};
