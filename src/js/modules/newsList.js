$(window).click(function() {
    $(".news-card").removeClass("news-card_active")
});

$('.news-card').click(function(event){
    event.stopPropagation();
});


$(".news-card").click(function() {
    let activeClass = "news-card_active"
    if ($(this).hasClass(activeClass)) {
        $(this).removeClass(activeClass)
    } else {
        $(".news-card").removeClass(activeClass)
        $(this).addClass(activeClass)
    }
})
// $(".news-card").on("mouseleave", function() {
//     $(this).removeClass("news-card_active")
// })