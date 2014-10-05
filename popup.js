function formatPrice(price) {
    return accounting.formatMoney(price, "₺", 2);
}

chrome.storage.local.get(function(rates) {
    var elAsk = document.getElementById("ask");
    var elBid = document.getElementById("bid");
    var elHigh = document.getElementById("high");
    var elLow = document.getElementById("low");
    var elLast = document.getElementById("last");
    var elVolume = document.getElementById("volume");
    var elTimestamp = document.getElementById("timestamp");

    var lastUpdated = new Date(rates.timestamp * 1000);

    elAsk.innerHTML = formatPrice(rates.Ask);
    elBid.innerHTML = formatPrice(rates.Bid);
    elHigh.innerHTML = formatPrice(rates.High);
    elLow.innerHTML = formatPrice(rates.Low);
    elLast.innerHTML = formatPrice(rates.Last);
    elVolume.innerHTML = rates.Volume + " BTC";
    elTimestamp.innerText = lastUpdated.toLocaleString();
});
