'use strict';

jest.dontMock('../../src/app/components/shiatMessageBox/ShiatMessageBox');

describe('ChatList', function () {
    it('should exists', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var MessageBox = require('../../src/app/components/shiatMessageBox/ShiatMessageBox');

        // Render into document
        var messageBox = TestUtils.renderIntoDocument( <MessageBox />);
        expect(TestUtils.isCompositeComponent(messageBox)).toBeTruthy();
    });

});
