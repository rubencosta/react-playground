'use strict';

jest.dontMock('../../src/app/components/chat/chat');

describe('Chat', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Chat = require('../../src/app/components/chat/chat');

    it('should exists', function () {
        var app = TestUtils.renderIntoDocument(<Chat />);
        expect(TestUtils.isCompositeComponent(app)).toBeTruthy();
    });
});
