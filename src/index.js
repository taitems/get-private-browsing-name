const getPrivateBrowsingName = () => {

  const ua = navigator && navigator.userAgent;

  const osDict = [
    {
      os: 'iOS',
      regex: [
        /iP(hone|od|ad)/
      ]
    },
    {
      os: 'Linux',
      regex: [
        /(Linux)|(X11)/
      ]
    },
    {
      os: 'Mac OS',
      regex: [
        /(Mac_PowerPC)|(Macintosh)/
      ]
    },
    {
      os: 'Windows',
      regex: [
        /Win/
      ]
    }
  ];

  const browserDict = [
    {
      browser: 'edge',
      mode: 'InPrivate Browsing',
      linkMethod: 'Open link in InPrivate window',
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: [
        /Edge\/([0-9\._]+)/,
        /EdgiOS\/([0-9\._]+)/
      ]
    },
    {
      browser: 'firefox',
      mode: 'Private Browsing',
      linkMethod: 'Open in New Private Window',
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: [
        /Firefox\/([0-9\.]+)(?:\s|$)/,
        /FxiOS/
      ]
    },
    {
      browser: 'safari',
      mode: 'Private Browsing',
      linkMethod: null,
      macMethod: 'Command⌘+Shift+n',
      windowsMethod: null,
      regex: [
        /Version\/([0-9\._]+).*Safari/
      ]
    },
    {
      browser: 'chrome',
      mode: 'Incognito',
      linkMethod: 'Open Link in Incognito Window',
      macMethod: 'Command⌘+Shift+n',
      windowsMethod: 'Ctrl+Shift+n',
      regex: [
        /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
        /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/
      ]
    },
    {
      browser: 'ie',
      mode: 'InPrivate Browsing',
      linkMethod: null,
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: [
        /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/,
        /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/,
        /MSIE\s(7\.0)/
      ]
    },
    {
      browser: 'opera',
      mode: 'Private Browsing',
      linkMethod: 'Open link in Private Window',
      macMethod: 'Command⌘+Shift+n',
      windowsMethod: 'Ctrl+Shift+n',
      regex: [
        /(?:Chrome).*(OPR)\/(\d+)\.(\d+)\.(\d+)/,
        /Opera/
      ]
    }
  ];

  const lookup = (dict, str) => {
    for (let i = 0, count = dict.length; i < count; i++) {
      const { regex } = dict[i];
      let match = false;
      for (var j = 0, jcount = regex.length; j < jcount; j++) {
        if (regex[j].exec(str)) {
          match = true;
        }
      }
      if (match) {
        return dict[i];
      }
    }
    return null;
  }

  const getOs = (str) => {
    const result = lookup(osDict, str);
    return result && result.os || null;
  }

  const getBrowser = (str) => {
    return lookup(browserDict, str);
  }

  const getMethodForBrowser = (os, browser) => {
    if (os === 'Windows' || os === 'Linux') {
      return browser.windowsMethod;
    } else if (os === 'Mac OS' || os === 'iOS') {
      return browser.macMethod;
    } else {
      return null;
    }
  }

  const os = getOs(ua);
  const browser = getBrowser(ua);
  const detectedMethod = browser && getMethodForBrowser(os, browser);

  return browser && {
    ...browser,
    detectedMethod,
  } || null;

}

module.exports = getPrivateBrowsingName;
