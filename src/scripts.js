let state = { active: true };
chrome.runtime.sendMessage(state);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	state = message;
	console.log('state toggled ', state);
});
