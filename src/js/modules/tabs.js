import { drawLine } from "./tournament.js"

$(".select-tabs").each(function(i, el) {
    let select = $('<select name="" id="" class="select"></select>')

    let buttons = $(this).find(".select-tabs__item")

    buttons.each(function(i, el) {
        select.append(`<option ${$(el).hasClass('select-tabs__item_active' ? 'selected' : '')}">${$(el).html()}</option>`)
    })

    let wrapper = $('<div class="select-wrapper"></div>')
    wrapper.append(select)

    $(this).append(wrapper)
})


const activeTabClass = "tabs__item_active"

function changeTab() {
    let tabIds = $(this).data("tab-content").split(" ")

    let hidden = false
    for (let tabId of tabIds) {
        if (!$(`[data-tab-id=${tabId}]`).hasClass(activeTabClass)) {
            hidden = true
            break;
        }
    }

    if (hidden) {
        $(this).hide()
    } else {
        $(this).css("display", "")
        if ($(this).hasClass("tournament-tabstournament-grid")) { drawLine() }
    }

    // console.log(tabIds)
}

$("[data-tab-content]").each(changeTab)

$(".tabs__item").click(function() {
    if ($(this).hasClass(activeTabClass)) { return }

    $(this).parents(".tabs").find(".tabs__item").removeClass(activeTabClass)
    $(this).addClass(activeTabClass)

    $("[data-tab-content]").css("display", "")
    $("[data-tab-content]").each(changeTab)

})