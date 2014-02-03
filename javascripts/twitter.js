$("#tweet").each(function() {
    var time = {"seconds": 1, "minutes": 60, "hours": 60, "days": 24,
        "months": 365 / 12, "years": 12};

    function timeDifference(previous) {
        var elapsed = new Date() - previous;
        var last = "";

        var multiplier = 1000;
        for (var unit in time) {
            multiplier = multiplier * time[unit];
            if (unit == "years") {
                break;
            }
            else if (last != "" && elapsed < multiplier) {
                multiplier = multiplier / time[unit];
                break;
            }
            last = unit;
        }
        return Math.round(elapsed / multiplier) + ' ' + last + ' ago';
    }

    function linkify(text) {
        var links = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g;
        return text.replace(links, function(match) {
            return "<a href='" + match + "'>" + match + "</a>"
        });
    }

    var tweeter = $(this);
    $.getJSON("http://twitter.com/statuses/user_timeline/cedexis.json?callback=?",
        function(data) {
            if (data.length <= 0) {
                return;
            }
            data = data[0];
            var time = timeDifference(new Date(data["created_at"]));
            var p = $("<p/>").text(data["text"]);
            p.html(linkify(p.text()));
            $("<span/>").html(time + " via <a href='http://twitter.com/cedexis'>Twitter</a>" + ".")
                .appendTo(p);
            tweeter.html(p);
            tweeter.slideDown();
        });
});
