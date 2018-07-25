let on = true;

const updateIcon = () => {
	if (on) {
		chrome.browserAction.setIcon({path: 'img/icon-off.png'});
		on = false;
	} else {
		chrome.browserAction.setIcon({path: 'img/icon-on.png'});
		on = true;
	}
};

chrome.browserAction.onClicked.addListener(updateIcon);
