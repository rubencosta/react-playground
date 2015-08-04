webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(true) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_require__.h()) >= 0;
		};
		var check = function check() {
			module.hot.check(true, function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot apply update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
						window.location.reload();
					} else {
						console.warn("[HMR] Update failed: " + err.stack || err.message);
					}
					return;
				}

				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					window.location.reload();
					return;
				}

				if(!upToDate()) {
					check();
				}

				__webpack_require__(2)(updatedModules, updatedModules);

				if(upToDate()) {
					console.log("[HMR] App is up to date.");
				}

			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(updatedModules, renewedModules) {
		var unacceptedModules = updatedModules.filter(function(moduleId) {
			return renewedModules && renewedModules.indexOf(moduleId) < 0;
		});

		if(unacceptedModules.length > 0) {
			console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
			unacceptedModules.forEach(function(moduleId) {
				console.warn("[HMR]  - " + moduleId);
			});
		}

		if(!renewedModules || renewedModules.length === 0) {
			console.log("[HMR] Nothing hot updated.");
		} else {
			console.log("[HMR] Updated modules:");
			renewedModules.forEach(function(moduleId) {
				console.log("[HMR]  - " + moduleId);
			});
		}
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(4);

	var React = __webpack_require__(8);
	var Shiat = __webpack_require__(9);

	var App = React.createClass({displayName: "App",
	    render: function () {
	        return (
	            React.createElement(Shiat, null)
	        )
	    }
	});

	React.render(React.createElement(App, null), document.body);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(5, function() {
				var newContent = __webpack_require__(5);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

	// module
	exports.push([module.id, "html body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  font-family: Roboto;\n}\n", ""]);

	// exports


/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(8);
	var ShiatUserList = __webpack_require__(10);
	var ShiatMessageBox = __webpack_require__(18);

	module.exports = React.createClass({displayName: "module.exports",
	    render: function () {
	        return (
	            React.createElement("div", {className: "mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--overlay-drawer-button"}, 
	                React.createElement(ShiatUserList, {ref: "userList", title: "Shiats"}), 
	                React.createElement(ShiatMessageBox, {ref: "messageBox"})
	            )
	        )
	    }
	});



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(11);

	var classNames = __webpack_require__(13);
	var prettyDates = __webpack_require__(14);
	var React = __webpack_require__(8);
	var MessageStore = __webpack_require__(15);
	var ChatActions = __webpack_require__(17);

	function getStateFromStore() {
	    var allChats = MessageStore.getAllChats();

	    var chatList = [];
	    for (var id in allChats) {
	        var chat = allChats[id];

	        var messagesLength = chat.messages.length;
	        chatList.push({
	            lastMessage: chat.messages[messagesLength - 1],
	            lastAccess: chat.lastAccess,
	            user: chat.user
	        })
	    }

	    return {
	        openChatID: MessageStore.getOpenChatUserID(),
	        chatList: chatList
	    };
	}

	module.exports = React.createClass({displayName: "module.exports",
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
	    updateOpenChat: function (index) {
	        ChatActions.updateOpenChatID(this.state.chatList[index].user.id);
	    },
	    render: function () {
	        this.state.chatList.sort(function (a, b) {
	            if (a.lastMessage.timestamp > b.lastMessage.timestamp) {
	                return -1;
	            }
	            if (a.lastMessage.timestamp < b.lastMessage.timestamp) {
	                return 1;
	            }
	            return 0;
	        });

	        var chats = this.state.chatList.map(function (chat, index) {
	            var chatClassNames = classNames('mdl-navigation__link', 'shiat-user-list-container',
	                {
	                    active: this.state.openChatID === chat.user.id
	                });

	            return (
	                React.createElement("a", {className: chatClassNames, onClick: this.updateOpenChat.bind(this, index)}, 
	                    React.createElement("div", {className: "shiat-user-list-item"}, 
	                        React.createElement("div", {className: "shiat-user-list-image", 
	                             style: {backgroundImage: 'url("' + chat.user.profilePicture + '")'}}), 
	                        React.createElement("div", {className: "shiat-user-list-name"}, chat.user.name), 
	                        React.createElement("div", {className: "shiat-user-list-timestamp"}, prettyDates.getShortDate(chat.lastMessage.timestamp)), 
	                        React.createElement("div", {className: "shiat-user-list-message"}, chat.lastMessage.contents)
	                    )
	                )
	            )
	        }.bind(this));

	        return (
	            React.createElement("div", {className: "mdl-layout__drawer"}, 
	                React.createElement("span", {className: "mdl-layout-title"}, this.props.title), 
	                React.createElement("nav", {className: "mdl-navigation"}, 
	                    chats
	                )
	            )
	        )
	    }
	});


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(12, function() {
				var newContent = __webpack_require__(12);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".shiat-user-list-container.active {\n  background-color: #757575;\n  color: #fafafa !important;\n}\n.shiat-user-list-container.active:hover {\n  color: #757575 !important;\n}\n.shiat-user-list-container .shiat-user-list-item {\n  display: flex;\n  flex-flow: row wrap;\n}\n.shiat-user-list-container .shiat-user-list-item > * {\n  flex: 1 100%;\n}\n.shiat-user-list-container .shiat-user-list-item .shiat-user-list-image {\n  flex: 0 1 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-position: center;\n  background-size: cover;\n}\n.shiat-user-list-container .shiat-user-list-item .shiat-user-list-name {\n  margin-left: 4px;\n  flex: 2 0;\n}\n.shiat-user-list-container .shiat-user-list-item .shiat-user-list-timestamp {\n  flex: 2 0;\n}\n.shiat-user-list-container .shiat-user-list-item .shiat-user-list-message {\n  padding-top: 8px;\n}\n", ""]);

	// exports


/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    getShortDate: function (timestamp) {
	        var distance = Math.round( ( +new Date() - timestamp ) / 60000 );
	        var date = new Date(timestamp);

	        var hour = ('0' + date.getHours()).slice(-2);
	        var minutes = ('0' + date.getMinutes()).slice(-2);

	        if (distance > 2879) {
	            if (distance > 14567) {
	                return this.getNiceDate(timestamp);
	            } else {
	                return 'Yesterday at ' + hour + ':' + minutes;
	            }
	        } else {
	            return 'at ' + hour + ':' + minutes;
	        }
	    },
	    getNiceDate: function (timestamp) {
	        var defaultString = '%d %f%y at %h:%i';

	        var language = {
	            0: 'less than a minute ago',
	            1: '1 minute ago',
	            59: '%distance minutes ago',
	            118: 'an hour ago',
	            1439: '%r hours ago',
	            2879: 'Yesterday at %h:%i',
	            14567: '%l at %h:%i',
	        };
	        var days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

	        var date = new Date(timestamp);
	        var distance = Math.round( ( +new Date() - timestamp ) / 60000 );

	        var string;
	        for (var i in language) {
	            if (distance < i) {
	                string = language[i];

	                break;
	            }
	        }

	        var hour = ('0' + date.getHours()).slice(-2);
	        var minutes = ('0' + date.getMinutes()).slice(-2);
	        var day = days[date.getDay()];
	        var month = months[date.getMonth()];

	        var year = date.getFullYear();
	        if (new Date().getFullYear() === year) {
	            year = '';
	        }

	        if (string) {
	            var hoursAgo = Math.round(distance / 60);

	            return string.replace(/%distance/i, distance)
	                .replace(/%r/i, hoursAgo)
	                .replace(/%h/i, hour)
	                .replace(/%i/i, minutes)
	                .replace(/%l/i, day);
	        }

	        return defaultString.replace(/%d/i, day)
	            .replace(/%f/i, month)
	            .replace(/%y/i, year)
	            .replace(/%h/i, hour)
	            .replace(/%i/i, minutes);
	    }
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(16);
	var ChatActions = __webpack_require__(17);

	var chats = {
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
	    },
	    3: {
	        user: {
	            read: true,
	            profilePicture: 'https://avatars3.githubusercontent.com/u/2955483?v=3&s=460',
	            name: 'Jilles Soeters',
	            id: 3,
	            status: 'online'
	        },
	        lastAccess: {
	            recipient: 1424352522000,
	            currentUser: 1424352522080
	        },
	        messages: [
	            {
	                contents: 'Want a game of ping pong?',
	                from: 3,
	                timestamp: 1424352522000
	            }
	        ]
	    },
	    4: {
	        user: {
	            name: 'Todd Motto',
	            id: 4,
	            profilePicture: 'https://avatars1.githubusercontent.com/u/1655968?v=3&s=460',
	            status: 'online'
	        },
	        lastAccess: {
	            recipient: 1424423579000,
	            currentUser: 1424423574000
	        },
	        messages: [
	            {
	                contents: 'Please follow me on twitter I\'ll pay you',
	                timestamp: 1424423579000,
	                from: 4
	            }
	        ]
	    }
	};

	var openChatID = parseInt(Object.keys(chats)[0], 10);

	module.exports = Reflux.createStore({
	    init: function () {
	        this.listenToMany(ChatActions);
	    },
	    getOpenChatUserID: function () {
	        return openChatID;
	    },
	    getChatByUserID: function (id) {
	        return chats[id];
	    },
	    getAllChats: function () {
	        return chats;
	    },
	    updateOpenChatID: function (id) {
	        openChatID = id;
	        chats[openChatID].lastAccess.currentUser = +new Date();
	        this.trigger();
	    },
	    sendMessage: function (message) {
	        chats[openChatID].messages.push(message);
	        this.trigger();
	    }
	});


/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(16);

	module.exports = Reflux.createActions([
	    'updateOpenChatID',
	    'sendMessage'
	]);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(19);

	var React = __webpack_require__(8);
	var classNames = __webpack_require__(13);
	var MessageStore = __webpack_require__(15);
	var ShiatReplyBox = __webpack_require__(21);

	function getStateFromStore() {
	    return MessageStore.getChatByUserID(MessageStore.getOpenChatUserID());
	}
	module.exports = React.createClass({displayName: "module.exports",
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
	        var messages = this.state.messages.map(function (message) {
	            var messageClassNames = classNames('shiat-message-item', {
	                'reply-message': message.from === 1
	            });
	            return (
	                React.createElement("div", {className: messageClassNames}, 
	                    React.createElement("div", {className: "mdl-shadow--2dp"}, message.contents)
	                )
	            )
	        });

	        return (
	            React.createElement("main", {className: "mdl-layout__content"}, 
	                React.createElement("div", {className: "page-content"}, 
	                    messages
	                ), 
	                React.createElement(ShiatReplyBox, null)
	            )
	        )
	    }
	});


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(20, function() {
				var newContent = __webpack_require__(20);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".shiat-message-item {\n  margin: 16px;\n  align-self: flex-start;\n  display: flex;\n  justify-content: flex-start;\n  color: #757575;\n}\n.shiat-message-item.reply-message {\n  justify-content: flex-end;\n}\n.shiat-message-item.reply-message > * {\n  background-color: #757575;\n  color: #fafafa !important;\n}\n.shiat-message-item > * {\n  padding: 4px;\n}\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(22);

	var React = __webpack_require__(8);
	var ChatActions = __webpack_require__(17);

	module.exports = React.createClass({displayName: "module.exports",
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
	            React.createElement("div", {className: "shiat-reply-box"}, 
	                React.createElement("input", {type: "text", ref: "input", value: this.state.value, onChange: this.onChangeHandler, onKeyDown: this.handleKeyDown, placeholder: "Type here to reply..."})
	            )
	        )
	    }
	});


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(23, function() {
				var newContent = __webpack_require__(23);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".shiat-reply-box {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: auto;\n  margin: 24px 0 0 0;\n}\n.shiat-reply-box input {\n  width: 100%;\n  min-height: 24px;\n  padding: 4px;\n}\n", ""]);

	// exports


/***/ }
]);