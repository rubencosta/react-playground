'use strict';

require('./shiatUserList.styl');

var classNames = require('classnames');
var prettyDates = require('../../../shared/prettyDates');
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
        this.state.chatList.sort(function (a, b) {
            if (a.lastMessage.timestamp > b.lastMessage.timestamp) {
                return -1;
            }
            if (a.lastMessage.timestamp < b.lastMessage.timestamp) {
                return 1;
            }
            return 0;
        });

        var chats = this.state.chatList.map(function (chat, index) {
            var chatClassNames = classNames('mdl-navigation__link', 'shiat-user-list-container',
                {
                    active: this.state.openChatID === chat.user.id
                });

            return (
                <a className={chatClassNames} onClick={this.updateOpenChat.bind(this, index)}>
                    <div className="shiat-user-list-item">
                        <div className="shiat-user-list-image"
                             style={{backgroundImage: 'url("' + chat.user.profilePicture + '")'}}></div>
                        <div className="shiat-user-list-name">{chat.user.name}</div>
                        <div className="shiat-user-list-timestamp">{prettyDates.getShortDate(chat.lastMessage.timestamp)}</div>
                        <div className="shiat-user-list-message">{chat.lastMessage.contents}</div>
                    </div>
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
