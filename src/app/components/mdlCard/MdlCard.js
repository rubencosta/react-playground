'use strict';
require('material-design-lite');
require('material-design-lite.css');
require('./mdlCard.styl');
var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            titleText: this.props.titleText || '',
            supportingText: this.props.supportingText || ''
        }
    },
    render: function () {
        return (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.state.titleText}</h2>
                </div>

                <div className="mdl-card__supporting-text">{this.state.supportingText}</div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Get Started
                    </a>
                </div>
                <div className="mdl-card__menu">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">share</i>
                    </button>
                </div>
            </div>
        )
    }
});
