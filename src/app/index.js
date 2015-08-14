'use strict';

require('../styles/styles.styl');

var React = require('react');
var App = require('./components/chat/chat');

React.render(<App />, document.getElementById('root'));