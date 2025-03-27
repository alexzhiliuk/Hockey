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

    var tabsContainer = $(this).parents('.tabs');
    var containerWidth = tabsContainer.width();
    var containerScrollLeft = tabsContainer.scrollLeft();

    var tabOffset = $(this).offset().left - tabsContainer.offset().left + containerScrollLeft;
    var tabWidth = $(this).outerWidth();

    // Вычисляем новую позицию прокрутки
    var newScrollPosition;
    var rightEdge = containerScrollLeft + containerWidth;
    var tabRightEdge = tabOffset + tabWidth;
    var tabLeftEdge = tabOffset;
    
    // Если таб близко к правому краю (например, в последней трети видимой области)
    if (tabRightEdge > rightEdge - containerWidth/3) {
      // Прокручиваем так, чтобы таб был у левого края с небольшим отступом
      newScrollPosition = tabOffset - 20;
    } 
    // Если таб близко к левому краю (например, в первой трети видимой области)
    else if (tabLeftEdge < containerScrollLeft + containerWidth/3) {
      // Прокручиваем так, чтобы таб был у правого края
      newScrollPosition = tabOffset - containerWidth + tabWidth + 20;
    }
    else {
      // Иначе оставляем текущую позицию
      newScrollPosition = containerScrollLeft;
    }
    
    // Ограничиваем прокрутку минимальным и максимальным значениями
    newScrollPosition = Math.max(0, Math.min(newScrollPosition, tabsContainer[0].scrollWidth - containerWidth));
    
    // Анимированная прокрутка
    tabsContainer.stop().animate({
      scrollLeft: newScrollPosition
    }, 300);

})