var bower_dir = __dirname + '/bower_components';

module.exports = {
    entry: ['./src/app/app.js'],

    // The resolve.alias object takes require expressions
    // (require('react')) as keys and filepath to actual
    // module as values
    resolve: {
        alias: {
            'react': bower_dir + '/react/react.min.js'
        }
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        // There is no reason for WebPack to parse this file
        noParse: [bower_dir + '/react/react.min.js'],
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
        ]
    }
};