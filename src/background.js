let state = { active: false };

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	state = message;
	setDefaultIcon(state.active);
});

const setDefaultIcon = (active) => {
	if (active) {
		chrome.browserAction.setIcon({path: 'img/icon-on.png'});
	}
}

const toggleIcon = () => {
	if (state.active) {
		chrome.browserAction.setIcon({path: 'img/icon-off.png'});
		state.active = false;
		sendMessage(state);
	} else {
		chrome.browserAction.setIcon({path: 'img/icon-on.png'});
		state.active = true;
		sendMessage(state);
	}
};

const sendMessage = (message) => {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
			console.log(response.farewell);
		});
	});
}

chrome.browserAction.onClicked.addListener(toggleIcon);
