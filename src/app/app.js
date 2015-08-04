'use strict';
require('./app.styl');

var React = require('react');
var ShiatUserList = require('./components/shiatChatList/ShiatChatList');
var ShiatMessageBox = require('./components/shiatMessageBox/ShiatMessageBox');

var App = React.createClass({
    render: function () {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--overlay-drawer-button">
                <ShiatUserList ref="userList" title="Shiats"/>
                <ShiatMessageBox ref="messageBox"/>
            </div>
        )
    }
});

React.render(<App/>, document.getElementById('root'));
