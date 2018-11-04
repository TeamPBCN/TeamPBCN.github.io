$(document).ready(function () {
    var httpReg = /https?:\/\//ig;
    var host = location.host;
    var localReg = new RegExp('https?:\\/\\/' + host, 'ig');
    $('a').each(function (idx, anchor) {
        var href = $(anchor).attr('href');
        if (href.match(httpReg) && !href.match(localReg)) {
            $(anchor).attr("target", "_blank");
        }
    });
});