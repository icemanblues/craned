chrome.alarms.create("craned", {
	"when": Date.now(),
	"periodInMinutes": 120
});


const craneUrl = "https://media.giphy.com/media/R803xtP8pnPO0/giphy.gif"
chrome.alarms.onAlarm.addListener(function(alarm) {
	// should we check that the alarm is craned
	// but since there is only 1 alarm, we know it is ours

	// find our tab
	chrome.tabs.query({
			"url": craneUrl
		}, 
		function(tab) {
			if(tab.length === 0) {
				// tab not found, so create it
				chrome.tabs.create({"url": craneUrl}, function(t) {});
			} else {
				// tab found, so make it the active tab
				// use the first one found
				chrome.tabs.update(tab[0].id, {
					"active": true
				}, 
				function(t) {});
			}
	});
});
