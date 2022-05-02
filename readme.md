![Build Status](https://img.shields.io/github/workflow/status/taitems/get-private-browsing-name/Tests/master)
![npm](https://img.shields.io/npm/dw/get-private-browsing-name)
![npm](https://img.shields.io/npm/v/get-private-browsing-name)
![npm bundle size](https://img.shields.io/bundlephobia/min/get-private-browsing-name)
## Get Private Browsing Name

A micro-package (< 3kb min) that returns the current browser's name for "private browsing" (Incognito/InPrivate/Private Browsing) and phrase displayed when right clicking on a link.

### Installation
Depending on your package manager of choice
- `yarn add get-private-browsing-name`, or
- `npm install get-private-browsing-name`

### Conceptual usage
![image](https://user-images.githubusercontent.com/234593/105451916-7c675880-5cd1-11eb-948f-0ddf27a9c162.png)
### General rule of thumb:
- **Safari:** Private Browsing Mode
- **Gooogle Chrome:** Incognito Mode
- **Microsoft Edge:** InPrivate Browsing Mode
- **Mozilla Firefox:** Private Browsing
- **Opera:** Private Browsing

### Test cases
Run `yarn test` to see test cases

### Example

```js
// Example Running in macOS Chrome
import getPrivateBrowsingName from 'get-private-browsing-name';
console.log(getPrivateBrowsingName());
// Logs the following
// {
//   browser: "chrome",
//   mode: "Incognito",
//   linkMethod: "Open Link in Incognito Window",
//   macMethod: 'Command⌘+Shift+p',
//   detectedMethod: 'Command⌘+Shift+p',
//   windowsMethod: 'Ctrl+Shift+p',
//   regex: /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
// }
```

### Changelog

#### `1.1.0` - Fixes hard crash. Adds Opera support. Fixes Chrome/Firefox-on-iOS tests.
#### `1.0.0` - Stable release