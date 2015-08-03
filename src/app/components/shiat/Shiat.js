'use strict';

var React = require('react');
var ShiatHeader = require('./shiatHeader/ShiatHeader');
var ShiatUserList = require('./shiatUserList/ShiatUserList');
var ShiatMessageBox = require('./shiatMessageBox/ShiatMessageBox');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="mdl-layout mdl-js-layout mdl-mdl-layout__drawer-button mdl-layout--fixed-header">
                <ShiatHeader/>
                <ShiatUserList ref="userList" title="Shiats"/>
                <ShiatMessageBox ref="messageBox"/>
            </div>
        )
    }
});

