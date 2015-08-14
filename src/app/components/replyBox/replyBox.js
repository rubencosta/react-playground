'use strict';

var React = require('react');
var ChatActions = require('../../actions/ChatActions');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            value: ''
        }
    },
    handleKeyDown: function(event) {
        if (event.keyCode === 13) {
            ChatActions.sendMessage({
                contents: this.state.value,
                timestamp: +new Date(),
                from: 1
            });
            this.setState({
                value: ''
            });
        }
    },
    onChangeHandler: function (event) {
        this.setState(function () {
            return {
                value: React.findDOMNode(this.refs.input).value
            }
        })
    },
    render: function () {
        return (
            <div className="shiat-reply-box">
                <input type="text" ref="input" value={this.state.value} onChange={this.onChangeHandler} onKeyDown={this.handleKeyDown} placeholder="Type here to reply..."/>
            </div>
        )
    }
});
