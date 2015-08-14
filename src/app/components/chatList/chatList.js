'use strict';

var React = require('react');
var Radium = require('radium');
var prettyDates = require('../../shared/prettyDates');
var MessageStore = require('../../stores/MessageStore');
var ChatActions = require('../../actions/ChatActions');

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

var ChatList = React.createClass({
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
            var activeChatStyles = {
                backgroundColor: '#757575',
                color: 'rgb(250,250,250)',
                ':hover': {
                    backgroundColor: 'rgb(224,224,224)',
                    color: '#757575'
                }
            };

            return (
                <a className="mdl-navigation__link"
                   style={this.state.openChatID === chat.user.id ? activeChatStyles : {}}
                   onClick={this.updateOpenChat.bind(this, index)}>
                    <div className="user-list-item">
                        <div className="user-list-image"
                             style={{backgroundImage: 'url("' + chat.user.profilePicture + '")'}}></div>
                        <div className="user-list-name">{chat.user.name}</div>
                        <div
                            className="user-list-timestamp">{prettyDates.getShortDate(chat.lastMessage.timestamp)}</div>
                        <div className="user-list-message">{chat.lastMessage.contents}</div>
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
module.exports = Radium(ChatList);
