const getPrivateBrowsingName = () => {
  const ua = navigator && navigator.userAgent;
  const dict = [
    {
      browser: 'edge',
      mode: 'InPrivate Browsing',
      linkMethod: 'Open link in InPrivate window',
      regex: /Edge\/([0-9\._]+)/
    },
    {
      browser: 'edge-ios',
      mode: 'InPrivate Browsing',
      linkMethod: 'Open link in InPrivate window',
      regex: /EdgiOS\/([0-9\._]+)/
    },
    {
      browser: 'firefox',
      mode: 'Private Browsing',
      linkMethod: 'Open in New Private Window',
      regex: /Firefox\/([0-9\.]+)(?:\s|$)/
    },
    {
      browser: 'safari',
      mode: 'Private Browsing',
      linkMethod: null,
      regex: /Version\/([0-9\._]+).*Safari/
    },
    {
      browser: 'chrome',
      mode: 'Incognito',
      linkMethod: 'Open Link in Incognito Window',
      regex: /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    },
    {
      browser: 'ie',
      mode: 'InPrivate Browsing',
      linkMethod: null,
      regex: /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
    },
    {
      browser: 'ie',
      mode: 'InPrivate Browsing',
      linkMethod: null,
      regex: /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
    },
    {
      browser: 'ie',
      mode: 'InPrivate Browsing',
      linkMethod: null,
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