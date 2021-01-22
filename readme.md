### WIP - Under development

A dependency-free micro-package that returns the current browser's name for "private browsing" (Incognito/InPrivate/Private Browsing) and phrase displayed when right clicking on a link.

### General rule of thumb:
- **Safari MacOs, iOS:** Private Browsing Mode
- **Gooogle Chrome:** Incognito Mode

```js
// Example Running in Chrome
import getPrivateBrowsingName from 'get-private-browsing-name';
console.log(getPrivateBrowsingName());
// Logs the following
// {
//   browser: "chrome",
//   mode: "Incognito",
//   linkMethod: "Open Link in Incognito Window",
//   macMethod: 'Command⌘+Shift+p',
//   windowsMethod: 'Ctrl+Shift+p',
//   regex: /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
// }
```