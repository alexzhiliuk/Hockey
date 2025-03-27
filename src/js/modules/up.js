$(".up-btn").hide()

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 500) {
        $(".up-btn").show()
    } else {
        $(".up-btn").hide()
    }
})

$(".up-btn").click(function() {
    $(window).scrollTop(0)
})