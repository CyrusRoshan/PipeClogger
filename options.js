function saveOptions() {
    chrome.storage.sync.set({
        cloggedURLS: document.querySelector(`input[name = 'cloggedURLS']`).value,
        cloggedTime: document.querySelector(`input[name = 'cloggedTime']`).value,
    }, () => {
		setStatusText('Options saved.');
    });
}

function restoreOptions() {
    getOptions((options) => {
        document.querySelector(`input[name = 'cloggedURLS']`).value = options.cloggedURLS;
		document.querySelector(`input[name = 'cloggedTime']`).value = options.cloggedTime;
    });
}

function resetOptions() {
	chrome.storage.sync.clear(() => {
		restoreOptions()
		setStatusText('Options reset to default.')
	});
}

function setStatusText(text) {
	var status = document.getElementById('status');

	status.textContent = text;
	setTimeout(() => {status.textContent = ''}, 750);
}

restoreOptions();
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('reset').addEventListener('click', resetOptions);