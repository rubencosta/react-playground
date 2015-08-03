var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.entry.vendor.push(name);
        if (!(path.indexOf('.css') > -1)) {
            this.module.noParse.push(new RegExp(path));
        }
    },
    entry: {
        app: ['webpack/hot/dev-server', './src/app/app.js'],
        vendor: []
    },
    resolve: {alias: {}},
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
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

config.addVendor('react', bower_dir + '/react/react.js');
config.addVendor('reflux', bower_dir + '/reflux/dist/reflux.js');
config.addVendor('material-design-lite', bower_dir + '/material-design-lite/material.js');
config.addVendor('material-design-lite.css', bower_dir + '/material-design-lite/material.css');
config.addVendor('roboto-fontface.css', bower_dir + '/roboto-fontface/css/roboto-fontface.css');
config.addVendor('classnames', bower_dir + '/classnames/index.js');

module.exports = config;
