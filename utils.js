function syncWait(ms) {
    var start = Date.now();
    var elapsedTime = 0;

    while (elapsedTime < ms) {
        elapsedTime = Date.now() - start;
    }
    console.log(elapsedTime, 'elapsed');

    return;
}