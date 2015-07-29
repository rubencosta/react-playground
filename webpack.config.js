var bower_dir = __dirname + '/bower_components';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        if(!(path.indexOf('.css') > -1)){
            this.module.noParse.push(new RegExp(path));
        }
    },
    entry: ['./src/app/app.js'],
    resolve: {alias: {}},
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        // There is no reason for WebPack to parse this file
        noParse: [],
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
};

config.addVendor('react', bower_dir + '/react/react.min.js');
config.addVendor('material-design-lite', bower_dir + '/material-design-lite/material.min.js');
config.addVendor('material-design-lite.css', bower_dir + '/material-design-lite/material.css');

module.exports = config;
