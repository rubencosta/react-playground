'use strict';

jest.dontMock('../../src/app/components/replyBox/replyBox');

describe('ReplyBox', function () {
    it('should exists', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var ReplyBox = require('../../src/app/components/replyBox/replyBox');

        // Render into document
        var replyBox = TestUtils.renderIntoDocument(<ReplyBox />);
        expect(TestUtils.isCompositeComponent(replyBox)).toBeTruthy();
    });

});
