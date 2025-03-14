$(".search-result").hide()

$(".search input").on("input", function() {
    if ($(this).val()) {
        $(this).siblings(".search-result").show()
    } else {
        $(this).siblings(".search-result").hide()
    }
})