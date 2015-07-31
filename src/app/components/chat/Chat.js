'use strict';

var React = require('react');
var MdlHeader = require('../mdlHeader/MdlHeader');
var MdlLayoutDrawer = require('../mdlLayoutDrawer/MdlLayoutDrawer');
var MdlLayoutContent = require('../mdlLayoutContent/MdlLayoutContent');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="mdl-layout mdl-js-layout mdl-mdl-layout__drawer-button mdl-layout--fixed-header">
                <MdlHeader/>
                <MdlLayoutDrawer ref="userList"/>
                <MdlLayoutContent ref="messageBox"/>
            </div>
        )
    }
});

