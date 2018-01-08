var cloggedURLS = ['*://*.facebook.com/*', '*://*.fbcdn.net/', '*://*.reddit.com/', '*://*.redditmedia.com/'];
var cloggedTime = 2000;

// clogging urls
chrome.webRequest.onBeforeRequest.addListener(
    (request) => {
        // must synchronously wait. Unfortunately the API doesn't support async
        syncWait(cloggedTime);

        return { cancel: false };
    },
    { urls: cloggedURLS },
    ['blocking']
);