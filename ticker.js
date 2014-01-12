var Ticker = function() {
    var url = "https://www.btcturk.com/api/ticker";

    return {
        init: function(cb) {
            chrome.browserAction.setBadgeText({"text": "...."});
            chrome.browserAction.setBadgeBackgroundColor({"color": "#ed9c28"});

            // starting an alarm to poll
            chrome.alarms.create("poll", {
                "when": Date.now(),
                "periodInMinutes": 1
            });

            if (cb) {
                cb();
            }
        },
        poll: function(cb) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    try {
                        var resp = JSON.parse(xhr.responseText);

                        // saving data into chrome storage
                        chrome.storage.local.set(resp, function() {
                            console.log("Successfully saved final rates to storage!");
                        });

                        if (cb) {
                            cb(resp);
                        }
                    } catch (e) {
                        console.log("Error occured while fetching latest rates:", e.message);
                    }
                }
            }

            xhr.send();
        }
    };
}();
