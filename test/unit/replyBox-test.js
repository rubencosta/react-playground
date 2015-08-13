'use strict';

jest.dontMock('../../src/app/components/shiatReplyBox/ShiatReplyBox');

describe('ReplyBox', function () {
    it('should exists', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var ReplyBox = require('../../src/app/components/shiatReplyBox/ShiatReplyBox');


        // Render into document
        var replyBox = TestUtils.renderIntoDocument(<ReplyBox />);
        expect(TestUtils.isCompositeComponent(replyBox)).toBeTruthy();
    });

});
