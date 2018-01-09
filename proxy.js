getOptions((options) => {
    const cloggedURLS = options.cloggedURLS.split(/,\ ?/);
    const cloggedTime = Number(options.cloggedTime);
    
    // clogging urls
    chrome.webRequest.onBeforeRequest.addListener(
        (request) => {
            // must synchronously wait. Unfortunately the API doesn't support async
            syncWait(cloggedTime);
    
            return { cancel: false };
        },
        { urls: cloggedURLS },
        ['requestHeaders', 'blocking']
    );
})