'use strict';

var React = require('react');
var MessageStore = require('../../stores/MessageStore');


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
