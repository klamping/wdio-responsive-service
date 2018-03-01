class ResponsiveService {
  static buildCapabilities(capabilities, globalViewports) {
    const newCaps = [];

    // create multiple capabilties from viewports
    capabilities.forEach(cap => {
      // allow individual capabilities to override global settings
      const desiredViewports = cap.viewports || globalViewports;

      desiredViewports.forEach(viewport => {
        newCaps.push({ ...cap, viewport });
      });
    });

    return newCaps;
  }

  before(capabilities) {
    // get the current viewport size
    const currentSize = browser.getViewportSize();

    const newSize = { ...currentSize, ...capabilities.viewport };

    // set the viewport size
    browser.setViewportSize(newSize);
  }
}

module.exports = ResponsiveService;
