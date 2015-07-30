'use strict';
require('./app.styl');

var React = require('react');
var MdlCard = require('./components/mdlCard/MdlCard.js');

var App = React.createClass({
    render: function () {
        return (
            <MdlCard
                titleText="My face is squared"
                supportingText="Sometimes I feel that my face is not round enough"
            />
        )
    }
});

React.render(<App/>, document.body);
