# WebdriverIO Responsive Service

This service allows you to more easily configure your capabilities to run on multiple viewport sizes.

# Installation

`npm install --save wdio-responsive-service`

# Configuration

```js
// wdio.conf.js
const ResponsiveService = require('wdio-responsive-service/lib/responsive-service');

export.config = {
  capabilities: ResponsiveService.buildCapabilities(
    [
      {
        browserName: 'chrome'
      },
      {
        browserName: 'firefox'
      }
    ],
    [
      {
        width: 480,
        height:   
      }, {
        width: 1200,
        height: 900
      }
    ]
  ),
  // ...
  services: ['responsive'],
  // ...
};
```


¯\\_(ツ)_/¯