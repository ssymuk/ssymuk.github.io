$(function() {
    if (window.self != window.top) {
        $(document.body).addClass("in-iframe");
        console.log('I.frame Injected!!')
    }
});