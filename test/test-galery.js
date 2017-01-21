var React = require('react');
var TestUtils = require('react-addons-test-utils');

var should = require('chai').should();

var Gallery = require('../js/components/gallery');

describe('Gallery component', function() {
    it('Renders images with descriptions', function() {
        var images = [
            { url: 'http://example.com/test.png', description: 'test' },
            { url: 'http://example.com/test2.png', description: 'test2' }
        ];

        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);
        var result = renderer.getRenderOutput();

        result.props.className.should.equal('gallery');
        var imgs = result.props.children;
        imgs.length.should.equal(2);
        for (var i = 0; i < images.length; i += 1) {
            imgs[i].props.url.should.equal(images[i].url);
            imgs[i].props.description.should.equal(images[i].description);
        }
    });
});
