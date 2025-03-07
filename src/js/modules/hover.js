$(window).click(function() {
    $(".hovered").removeClass("hovered")
});

$('.match-preview').click(function(event){
    event.stopPropagation();
});

$(".match-preview").click(function() {
    if (window.innerWidth > 992) { return }
    $(this).toggleClass("hovered")
})