const getPrivateBrowsingName = () => {
  const ua = navigator && navigator.userAgent;
  const dict = [
    {
      browser: 'edge',
      mode: 'InPrivate Browsing',
      linkMethod: 'Open link in InPrivate window',
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: /Edge\/([0-9\._]+)/
    },
    {
      browser: 'edge-ios',
      mode: 'InPrivate Browsing',
      linkMethod: 'Open link in InPrivate window',
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: /EdgiOS\/([0-9\._]+)/
    },
    {
      browser: 'firefox',
      mode: 'Private Browsing',
      linkMethod: 'Open in New Private Window',
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: /Firefox\/([0-9\.]+)(?:\s|$)/
    },
    {
      browser: 'safari',
      mode: 'Private Browsing',
      linkMethod: null,
      macMethod: 'Command⌘+Shift+n',
      windowsMethod: null,
      regex: /Version\/([0-9\._]+).*Safari/
    },
    {
      browser: 'chrome',
      mode: 'Incognito',
      linkMethod: 'Open Link in Incognito Window',
      macMethod: 'Command⌘+Shift+n',
      windowsMethod: 'Ctrl+Shift+n',
      regex: /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    },
    {
      browser: 'ie',
      mode: 'InPrivate Browsing',
      linkMethod: null,
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
    },
    {
      browser: 'ie',
      mode: 'InPrivate Browsing',
      linkMethod: null,
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
    },
    {
      browser: 'ie',
      mode: 'InPrivate Browsing',
      linkMethod: null,
      macMethod: 'Command⌘+Shift+p',
      windowsMethod: 'Ctrl+Shift+p',
      regex: /MSIE\s(7\.0)/
    },
  ];

  for (let i = 0, count = dict.length; i < count; i++) {
    const { regex } = dict[i];
    const match = regex.exec(ua);
    if (match) {
      return dict[i];
    }
  }
  return null;
}

export default getPrivateBrowsingName;