### WIP - Under development

A package that returns the current browser's name for "private browsing" (Incognito/InPrivate/Private Browsing) and phrase displayed when right clicking on a link.

```js
// Example Running in Chrome
import getPrivateBrowsingName from 'getPrivateBrowsingName';
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