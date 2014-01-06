var Ticker = function() {
    var url = "https://www.btcturk.com/api/ticker";

    return {
        poll: function() {
            console.log("DENEME1:", url);

            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    try {
                        var resp = JSON.parse(xhr.responseText);

                        console.log("DENEME2:", resp);
                    } catch (e) {
                        console.log("Something went wrong:", e.message);
                    }
                }
            }

            xhr.send();
        }
    };
}();

document.addEventListener('DOMContentLoaded', function () {
    // Ticker.poll();
});
