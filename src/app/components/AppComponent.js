'use strict';
require('material-design-lite');
require('material-design-lite.css');
var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <group>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Hello</button>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
                    <i className="material-icons">add</i>
                </button>
            </group>
        )
    }
});
