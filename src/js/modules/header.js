$(".burger").click(function() {
    $(this).toggleClass("burger_active")
    $(".header").toggleClass("header_open")
    $("html, body").toggleClass("lock-clip")
})