$(function() {
    let fetchHTML = function() {
        let html = $(".html").val();
        return html
    }
    let fetchCss = function() {
        let css = $(".css").val()
        return css
    }
    $(".innerbox").on("keyup", function() {
        let target = $("#live_update")[0].contentWindow.document;
        target.open()
        target.close()
        let html = fetchHTML()
        let css = fetchCss()
        $("body", target).append(html)
        $("head", target).append("<style>" + css + "</style>")
    });
});