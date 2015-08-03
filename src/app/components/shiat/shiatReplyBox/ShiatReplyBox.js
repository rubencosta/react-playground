'use strict';

require('./shiatReplyBox.styl');

var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            value: ''
        }
    },
    handleKeyDown: function(event) {
        if (event.keyCode === 13) {
            this.setState({
                value: ''
            });
        }
    },
    onChangeHandler: function (event) {
        console.log(event);
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
