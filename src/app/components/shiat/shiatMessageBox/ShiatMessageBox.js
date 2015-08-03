'use strict';

require('./shiatMessageBox.styl');

var React = require('react');
var MessageStore = require('../../../stores/MessageStore');
var ShiatReplyBox = require('../shiatReplyBox/ShiatReplyBox');

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
            return (
                <div className="mdl-shadow--2dp shiat-message-item">{message.contents}</div>
            )
        });

        return (
            <main className="mdl-layout__content">
                <div className="page-content">
                    {messages}
                </div>
                <ShiatReplyBox/>
            </main>
        )
    }
});
