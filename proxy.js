function clogRequest(cloggedURLS, cloggedTime) {
    return (request) => {
        syncWait(cloggedTime); // unfortunately the API doesn't allow for async timeouts

        return { cancel: false };
    }
}

function runProxy() {
    getOptions((options) => {    
        const cloggedURLS = options.cloggedURLS.split(/,\ ?/);
        const cloggedTime = Number(options.cloggedTime);

        chrome.webRequest.onBeforeRequest.addListener(
            clogRequest(cloggedURLS, cloggedTime),
            { urls: cloggedURLS },
            ['blocking']
        );
    })
}

// Reset proxy with new clogged URLs and clog time
chrome.storage.onChanged.addListener((options) => {
    chrome.webRequest.onBeforeRequest.removeListener(clogRequest);
    runProxy();
})

runProxy();