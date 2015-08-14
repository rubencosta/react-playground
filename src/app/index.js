'use strict';

require('./components/chat/chat.styl');

var React = require('react');
var App = require('./components/chat/chat');

React.render(<App />, document.getElementById('root'));