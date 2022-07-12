//// background.js

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

chrome.commands.onCommand.addListener((command) => {
    console.log(`Command "${command}" triggered`);
	getCurrentTab().then((tab) => {
		//console.log(tab.id);
        chrome.tabs.duplicate(tab.id)
	});
  });
