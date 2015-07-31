'use strict';
require('./app.styl');

var React = require('react');
var Chat = require('./components/chat/Chat');

var App = React.createClass({
    render: function () {
        return (
            <Chat/>
        )
    }
});

React.render(<App/>, document.body);
