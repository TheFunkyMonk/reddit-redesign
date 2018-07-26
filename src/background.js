let on = false;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message === 'active') {
		on = true;
		chrome.browserAction.setIcon({path: 'img/icon-on.png'});
	}
});

const updateIcon = () => {
	if (on) {
		chrome.browserAction.setIcon({path: 'img/icon-off.png'});
		on = false;

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, "inactive", function(response) {
				console.log(response.farewell);
			});
		});
	} else {
		chrome.browserAction.setIcon({path: 'img/icon-on.png'});
		on = true;
	}
};

chrome.browserAction.onClicked.addListener(updateIcon);
