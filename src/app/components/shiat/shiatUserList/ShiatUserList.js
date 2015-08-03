'use strict';

require('./shiatUserList.styl');

var React = require('react');
var MessageStore = require('../../../stores/MessageStore');
var ChatActions = require('../../../actions/ChatActions');

function getStateFromStore() {
    var allChats = MessageStore.getAllChats();

    var chatList = [];
    for (var id in allChats) {
        var chat = allChats[id];

        var messagesLength = chat.messages.length;
        chatList.push({
            lastMessage: chat.messages[messagesLength - 1],
            lastAccess: chat.lastAccess,
            user: chat.user
        })
    }

    return {
        openChatID: MessageStore.getOpenChatUserID(),
        chatList: chatList
    };
}

module.exports = React.createClass({
    getInitialState: function () {
        return getStateFromStore();
    },
    componentDidMount: function () {
        this.unsubscribe = MessageStore.listen(this.onMessagesChange);
    },
    componentWillUnmount: function () {
        this.unsubscribe();
    },
    onMessagesChange: function () {
        this.setState(getStateFromStore());
    },
    updateOpenChat: function (index) {
        ChatActions.updateOpenChatID(this.state.chatList[index].user.id);
    },
    render: function () {
        var chats = this.state.chatList.map(function (chat, index) {
            return (
                <a className="mdl-navigation__link" onClick={this.updateOpenChat.bind(this, index)}>
                    <div className="shiat-user-list-image" style={{backgroundImage: 'url("' + chat.user.profilePicture + '")'}}></div>
                    {chat.user.name}<br/>
                    {chat.lastAccess.currentUser}<br/>
                </a>
                )
        }.bind(this));

        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">{this.props.title}</span>
                <nav className="mdl-navigation">
                    {chats}
                </nav>
            </div>
        )
    }
});
