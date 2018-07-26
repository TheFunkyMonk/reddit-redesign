chrome.runtime.sendMessage("active");

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	alert('content script got ' + message);
	// if (message === 'active') {
	// 	on = true;
	// 	chrome.browserAction.setIcon({path: 'img/icon-on.png'});
	// }
});
