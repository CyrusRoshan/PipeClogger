function syncWait(ms) {
    var start = Date.now();
    var elapsedTime = 0;

    while (elapsedTime < ms) {
        elapsedTime = Date.now() - start;
    }

    return;
}

function getOptions(callback) {
    chrome.storage.sync.get({
        cloggedURLS: `*://*.facebook.com/*, *://*.fbcdn.net/, *://*.reddit.com/*, *://*.redditmedia.com/*`,
        cloggedTime: 2000,
    }, callback)
}