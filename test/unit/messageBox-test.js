'use strict';

jest.dontMock('../../src/app/components/messageBox/messageBox');

describe('ChatList', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var MessageBox = require('../../src/app/components/messageBox/messageBox');

    it('should exists', function () {
        var messageBox = TestUtils.renderIntoDocument( <MessageBox />);
        expect(TestUtils.isCompositeComponent(messageBox)).toBeTruthy();
    });
});
