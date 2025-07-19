// Сетка

export function drawLine() {
    try {
        
        let gridHeight = $(".tournament-grid").innerHeight();
        let thirdHeight = $(".tournament-card_3nd").innerHeight();

        let bottom = (gridHeight - thirdHeight) / 2;

        console.log(bottom)
        bottom = bottom < 270 ? -1 * (bottom - 270) : 0;

        console.log(bottom)
        
        if (thirdHeight / gridHeight > 0.21) {
            $(".tournament-card_3nd").css("bottom", `calc(-1 * (${bottom}px))`)
            $(".tournament-grid-wrapper").css("height", `${gridHeight + bottom}px`)
        }


        let a = $(".tournament-grid__stage_semifinal .tournament-card:first-child").offset().top,
            b = $(".tournament-grid__stage_semifinal .tournament-card:last-child").offset().top
        
        $(".tournament-grid__stage_semifinal").css("--line-height", b - a)

    } catch {}
}

drawLine()

function cardResize() {
    let gap = 30;
    let size = ($(".tournament-grid-wrapper").outerWidth() - 90 - 2 * gap) / 3;
    if (size < 380) {
        $(".tournament-card").css("width", '')
        return
    }
    $(".tournament-card").css("width", `${size}px`)
}

cardResize()

$(window).resize(cardResize)

// function thirdCardResize() {
//     if ($(window).innerWidth() < 768) {
//         $(".tournament-card_3nd").css("width", "")
//         return
//     }
//     let width = $(".tournament-grid__stage").innerWidth()
//     $(".tournament-card_3nd").css("width", `${width}px`)
// }

// thirdCardResize()

// $(window).resize(thirdCardResize)

$(".tournament-tabs .tabs__item").click(function() {
    let stage = $(this).data("stage")

    $(".tournament-grid__stage").removeClass("tournament-grid__stage_active")
    $(".tournament-grid__stage[data-stage=" + stage + "]").addClass("tournament-grid__stage_active")
})