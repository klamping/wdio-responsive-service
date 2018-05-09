class ResponsiveService {
  static buildCapabilities(capabilities, globalViewports) {
    const newCaps = [];

    // create multiple capabilties from viewports
    capabilities.forEach(cap => {
      // if we're not testing on a device
      if (!cap.deviceName) {
        // allow individual capabilities to override global settings
        const desiredViewports = cap.viewports || globalViewports;

        desiredViewports.forEach(viewport => {
          newCaps.push({ ...cap, viewport });
        });
      } else {
        newCaps.push(cap);
      }
    });

    return newCaps;
  }

  before(capabilities) {
    // only set viewport size on non-mobile devices
    if (!browser.isMobile) {
      // get the current viewport size
      const currentSize = browser.getViewportSize();

      const newSize = { ...currentSize, ...capabilities.viewport };

      // set the viewport size
      browser.setViewportSize(newSize);
    }
  }
}

module.exports = ResponsiveService;