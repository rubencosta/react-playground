'use strict';

var React = require('react');
var ChatList = require('./../chatList/chatList');
var MessageBox = require('./../messageBox/messageBox');

var App = React.createClass({
    render: function () {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--overlay-drawer-button">
                <ChatList ref="userList" title="Chats"/>
                <MessageBox ref="messageBox"/>
            </div>
        )
    }
});

module.exports = App;
