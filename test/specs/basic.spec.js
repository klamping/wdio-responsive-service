var expect = require('chai').expect;

describe('webdriver.io home page', function() {
  it('should look good', function() {
    browser.url('./');

    const size = browser.options.desiredCapabilities.viewport;
    browser.saveScreenshot(`./homepage-${size.width}x${size.height}.png`);
  });
});