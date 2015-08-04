'use strict';
require('./app.styl');

var React = require('react');
var Shiat = require('./components/shiat/Shiat');

var App = React.createClass({
    render: function () {
        return (
            <Shiat/>
        )
    }
});

React.render(<App/>, document.getElementById('root'));
