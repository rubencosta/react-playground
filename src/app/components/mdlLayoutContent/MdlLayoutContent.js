'use strict';

var React = require('react');
var MessageStore = require('../../stores/MessageStore');

module.exports = React.createClass({
    getInitialState: function () {
        return MessageStore.getChatByUserID(MessageStore.getOpenChatUserID());
    },
    render: function () {
        return (
            <main className="mdl-layout__content">
                <div className="page-content">{
                    this.state.messages.map(function (message) {
                        return <li>{message.contents}</li>
                    })
                }</div>
            </main>
        )
    }
});
