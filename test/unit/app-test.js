'use strict';

jest.dontMock('../../src/app/app');

describe('App', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var App = require('../../src/app/app');

    it('should exists', function () {
        var app = TestUtils.renderIntoDocument(<App />);
        expect(TestUtils.isCompositeComponent(app)).toBeTruthy();
    });
});
