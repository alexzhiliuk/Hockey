// Сетка

export function drawLine() {
    try {

        let a = $(".tournament-grid__stage_semifinal .tournament-card").offset().top,
            b = $(".tournament-grid__stage_semifinal .tournament-card").offset().top
        
        $(".tournament-grid__stage_semifinal").css("--line-height", b - a)
        
        let gridHeight = $(".tournament-grid").innerHeight()
        let thirdHeight = $(".tournament-card_3nd").innerHeight()
        
        if (thirdHeight / gridHeight > 0.21) {
            $(".tournament-card_3nd").css("bottom", `calc(-1 * (${(thirdHeight / gridHeight - 0.21)*500}px + 1.25em))`)
        }

    } catch {}
}

drawLine()


$(".tournament-tabs .tabs__item").click(function() {
    let stage = $(this).data("stage")

    $(".tournament-grid__stage").removeClass("tournament-grid__stage_active")
    $(".tournament-grid__stage[data-stage=" + stage + "]").addClass("tournament-grid__stage_active")
})