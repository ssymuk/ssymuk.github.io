$(function() {
    if (window.self != window.top) {
        $(document.body).addClass("in-iframe");
    }
})(jQuery);