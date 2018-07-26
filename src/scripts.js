let styleNode = document.createElement ("style");
styleNode.type = "text/css";
styleNode.textContent = "@font-face { font-family: Domine; src: url('"
	+ chrome.extension.getURL ("fonts/Domine-Regular.ttf")
	+ "'); }\n"
	+ "@font-face { font-family: Open Sans; src: url('"
	+ chrome.extension.getURL ("fonts/OpenSans-Regular.ttf")
	+ "'); }";
document.head.appendChild (styleNode);

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
