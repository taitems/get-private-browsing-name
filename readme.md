![npm](https://img.shields.io/npm/v/get-private-browsing-name) ![npm bundle size](https://img.shields.io/bundlephobia/min/get-private-browsing-name)
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

### Test cases
Run `yarn test` to see test cases

| User Agent | Result | 
| ---- | --- |
| Chrome on macOS | ✅ Pass | 
| Apple iPhone XR (Safari) | ✅ Pass | 
| Apple iPhone XS (Chrome) | 🛑 Fail | 
| Apple iPhone XS Max (Firefox) | 🛑 Fail | 
| Windows 10-based PC using Edge browser | ✅ Pass | 
| Windows 7-based PC using a Chrome browser | ✅ Pass | 

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