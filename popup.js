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

    elAsk.innerHTML = formatPrice(rates.ask);
    elBid.innerHTML = formatPrice(rates.bid);
    elHigh.innerHTML = formatPrice(rates.high);
    elLow.innerHTML = formatPrice(rates.low);
    elLast.innerHTML = formatPrice(rates.last);
    elVolume.innerHTML = rates.volume + " BTC";
    elTimestamp.innerText = lastUpdated.toLocaleString();
});
