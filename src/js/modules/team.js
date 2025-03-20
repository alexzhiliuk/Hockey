$(".team__history-toggle").click(function() {
    $(this).toggleClass("team__history-toggle_open")
    $(".team__history").toggleClass("team__history_open")
})

if ($(".team").length) {    
    $(window).on("scroll", function() {
        let headerHeight = $(".header").outerHeight()
        
        if (window.innerWidth > 768) { 
            $("#teamPageMobileNav").remove()
            return
         }

        if ($(".team__links").offset().top + $(".team__links").outerHeight() + 10 < $(window).scrollTop() + headerHeight) {
        
            if ($("#teamPageMobileNav").length !== 0) { return }

            let nav = $("<div>", {id: "teamPageMobileNav", style: `background: white; border-bottom: 1px solid #D9D9D9; z-index: 7; display: flex; padding: 10px; gap: 10px; position: fixed; left: 0; right: 0; top: ${headerHeight}px`}),
                logo = $("<img>", {src: $(".team__logo img").attr("src"), width: "53px"}),
                btn1 = $($(".team__links a")[0].cloneNode(true)).attr("style", "max-width: unset; flex: 1 1;"),
                btn2 = $($(".team__links a")[1].cloneNode(true)).attr("style", "max-width: unset; flex: 1 1;")
                
            nav.append(logo).append(btn1).append(btn2)
            nav.insertAfter($(".header"))

        } else {

            $("#teamPageMobileNav").remove()

        }
    })
}

$(".staff-tabs .tabs__item").click(function() {
    let team = $(this).data("staff-team")

    $(`.staff-team`).removeClass("staff-team_open")
    $(`.staff-team[data-staff-team=${team}]`).addClass("staff-team_open")
})