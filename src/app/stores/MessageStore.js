'use strict';

var Reflux = require('reflux');
var ChatActions = require('../actions/ChatActions');

var messages = {
    1: {
        user: {
            profilePicture: 'https://avatars0.githubusercontent.com/u/7922109?v=3&s=460',
            id: 1,
            name: 'Ryan Clark',
            status: 'online'
        },
        lastAccess: {
            recipient: 1424469794050,
            currentUser: 1424469794080
        },
        messages: [
            {
                contents: 'Hey!',
                from: 2,
                timestamp: 1424469793023
            },
            {
                contents: 'Hey, what\'s up?',
                from: 1,
                timestamp: 1424469794000
            }
        ]
    },
    2: {
        user: {
            profilePicture: 'https://avatars0.githubusercontent.com/u/7922109?v=3&s=460',
            id: 2,
            name: 'Ryan Clark',
            status: 'online'
        },
        lastAccess: {
            recipient: 1424469794050,
            currentUser: 1424469794080
        },
        messages: [
            {
                contents: 'Hey!',
                from: 2,
                timestamp: 1424469793023
            },
            {
                contents: 'Hey, what\'s up?',
                from: 1,
                timestamp: 1424469794000
            }
        ]
    }
};

var openChatID = parseInt(Object.keys(messages)[0], 10);

module.exports = Reflux.createStore({
    init: function () {
        this.listenToMany(ChatActions);
    },
    getOpenChatUserID: function () {
        return openChatID;
    },
    getChatByUserID: function (id) {
        return messages[id];
    },
    getAll: function () {
        return messages;
    }
});
