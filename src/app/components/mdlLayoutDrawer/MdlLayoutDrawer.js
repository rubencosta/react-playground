'use strict';

var React = require('react');
var MessageStore = require('../../stores/MessageStore');

module.exports = React.createClass({
    getInitialState: function () {
        var allMessages = MessageStore.getAllChats();

        var messageList = [];
        for (var id in allMessages) {
            var item = allMessages[id];

            var messagesLength = item.messages.length;
            messageList.push({
                lastMessage: item.messages[messagesLength -1],
                lastAccess: item.lastAccess,
                user: item.user
            })
        }

        return {
            openChatID: MessageStore.getOpenChatUserID(),
            messageList: messageList
        };
    },
    render: function () {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Title</span>
                <nav className="mdl-navigation">
                    {
                        this.state.messageList.map(function (message) {
                            return <a className="mdl-navigation__link" href="">{message.user}</a>

                        })
                    }
                </nav>
            </div>
        )
    }
});
