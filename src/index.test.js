const { clear, mockUserAgent } = require('jest-useragent-mock');
const getPrivateBrowsingName = require('./index');

// Test user agent, Chrome on Mac OS
const testUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36';
const ieOnWindowsUA = 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko';

const scenarios = [{
    title: 'Chrome on macOS',
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36',
    mode: 'Incognito',
    browser: 'chrome',
    method: '⌘'
}, {
    title: 'Apple iPhone XR (Safari)',
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
    mode: 'Private Browsing',
    browser: 'safari'
}, {
    title: 'Apple iPhone XS (Chrome)',
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1',
    mode: 'Incognito',
    browser: 'chrome'
}, {
    title: 'Apple iPhone XS Max (Firefox)',
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/13.2b11866 Mobile/16A366 Safari/605.1.15',
    mode: 'Private Browsing',
    browser: 'firefox'
}, {
    title: 'Windows 10-based PC using Edge browser',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    mode: 'InPrivate Browsing',
    browser: 'edge',
    method: 'Ctrl'
}, {
    title: 'Windows 7-based PC using a Chrome browser',
    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    mode: 'Incognito',
    browser: 'chrome',
    method: 'Ctrl'
}, {
    title: 'Opera on a Windows PC',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 OPR/86.0.4363.23',
    mode: 'Private Browsing',
    browser: 'opera',
    method: 'Ctrl'
}, {
    title: 'Opera on MacOS',
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 OPR/86.0.4363.23',
    mode: 'Private Browsing',
    browser: 'opera',
    method: '⌘'
}]

describe('error handling', () => {
    it('should fail gracefully', () => {
        mockUserAgent("garbage input")
        let result = getPrivateBrowsingName();
        expect(result).toBe(null);
    })
})
describe('mock useragent', () => {
    afterEach(() => {
        clear()
    })
    for (let i = 0; i < scenarios.length; i++) {
        let item = scenarios[i];
        it(`should work for ${item.title}`, () => {
            mockUserAgent(item.ua)
            let result = getPrivateBrowsingName();
            expect(result.mode).toBe(item.mode);
            expect(result.browser).toBe(item.browser);
            if (item.method) {
                expect(result.detectedMethod).toContain(item.method);
            }
        })
    }

});