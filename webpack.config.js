var webpack = require('webpack');
var vendor_dir = __dirname + '/node_modules';
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.entry.app.push(name);
        if (!(path.indexOf('.css') > -1)) {
            this.module.noParse.push(new RegExp(path));
        }
    },
    entry: {
        app: ['webpack/hot/dev-server', './src/app/app.js']
    },
    resolve: {alias: {}},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React playground',
            template: './src/index.tpl.html',
            inject: true
        })
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'},
            {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot|\.ttf$|\.wav$|\.mp3$/, loader: "file"}
        ]
    }
};

config.addVendor('material-design-lite', vendor_dir + '/material-design-lite/material.js');
config.addVendor('material-design-lite.css', vendor_dir + '/material-design-lite/material.css');
config.addVendor('roboto-fontface.css', vendor_dir + '/roboto-fontface/css/roboto-fontface.css');

module.exports = config;
