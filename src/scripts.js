let state = { active: true };

let setClasses = (state) => {
	let classes = document.body.classList;
	state.active ? classes.add('redesign') : classes.remove('redesign');
}

setClasses(state);
chrome.runtime.sendMessage(state);

setTimeout(() => {
	document.body.classList.add('loaded');
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	state = message;
	setClasses(state);
});
