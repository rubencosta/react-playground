'use strict';

var React = require('react');
var ShiatUserList = require('./shiatChatList/ShiatChatList');
var ShiatMessageBox = require('./shiatMessageBox/ShiatMessageBox');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--overlay-drawer-button">
                <ShiatUserList ref="userList" title="Shiats"/>
                <ShiatMessageBox ref="messageBox"/>
            </div>
        )
    }
});

