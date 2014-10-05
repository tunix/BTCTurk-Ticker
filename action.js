function updateBadge(rates) {
    var rate = Math.floor(rates.Ask);

    console.log("Updating badge with new price:", rate);

    chrome.browserAction.setTitle({
        "title": "BTCTurk Ticker (ask: ₺" + rate + ")"
    });
    chrome.browserAction.setBadgeText({"text": rate + " "});
};

// update ticker badge upon chrome init
Ticker.init(Ticker.poll(updateBadge));

// alarm listener
chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === "poll") {
        Ticker.poll(updateBadge);
    }
});
