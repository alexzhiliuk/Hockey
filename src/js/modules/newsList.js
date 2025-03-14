$(window).click(function() {
    $(".news-card").removeClass("news-card_active")
});

$('.news-card').click(function(event){
    event.stopPropagation();
});


$(".news-card").click(function() {
    $(this).addClass("news-card_active")
})
$(".news-card").on("mouseleave", function() {
    $(this).removeClass("news-card_active")
})