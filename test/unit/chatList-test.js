'use strict';

jest.dontMock('../../src/app/components/shiatChatList/ShiatChatList');

describe('ChatList', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var ChatList;

    beforeEach(function() {
        ChatList = require('../../src/app/components/shiatChatList/ShiatChatList');
    });

    it('should exists', function() {
        // Render into document
        var chatList = TestUtils.renderIntoDocument( <ChatList /> );
        expect(TestUtils.isCompositeComponent(chatList)).toBeTruthy();
    });

});
