'use strict';

require('./messageBox.styl');

var React = require('react');
var MessageStore = require('../../stores/MessageStore');
var ReplyBox = require('../replyBox/replyBox');

function getStateFromStore() {
    return MessageStore.getChatByUserID(MessageStore.getOpenChatUserID());
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
    render: function () {
        var messages = this.state.messages.map(function (message) {
            var replyMessageItemStyles = {
                justifyContent: 'flex-end'
            };
            var replyMessageContentStyles = {
                backgroundColor: '#757575',
                color: 'rgb(250, 250, 250)'
            };
            return (
                <div className="message-item" style={message.from === 1 ? replyMessageItemStyles : {}}>
                    <div className="mdl-shadow--2dp"
                         style={message.from === 1 ? replyMessageContentStyles: {}}>{message.contents}</div>
                </div>
            )
        });

        return (
            <main className="mdl-layout__content">
                <div className="page-content">
                    {messages}
                </div>
                <ReplyBox/>
            </main>
        )
    }
});
