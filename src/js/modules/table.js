function checkHorizontalScroll(element) {
    const canScroll = element[0].scrollWidth > element[0].clientWidth;
    const isAtStart = element.scrollLeft() === 0;
    const isAtEnd = element.scrollLeft() + element[0].clientWidth >= element[0].scrollWidth - 1;

    return {
        canScroll: canScroll, // Можно ли скролить
        isAtStart: isAtStart, // Доскролен ли до начала
        isAtEnd: isAtEnd      // Доскролен ли до конца
    };
}

function toggleClasses(element, scrollInfo) {
    if (scrollInfo.canScroll) {
        if (scrollInfo.isAtStart) {
            element.addClass("table_shadow_right").removeClass("table_shadow_left")
        } else if (scrollInfo.isAtEnd) {
            element.addClass("table_shadow_left").removeClass("table_shadow_right")
        } else {
            element.addClass("table_shadow_left").addClass("table_shadow_right")
        }

        var scroll = element.scrollLeft()
        element.css("--right-shadow", `-${scroll}px`)
        element.css("--left-shadow", `${scroll}px`)
    } else {
        element.removeClass("table_shadow_left").removeClass("table_shadow_right")
    }
}

var element = $('.table');
var scrollInfo = checkHorizontalScroll(element);

toggleClasses(element, scrollInfo);

element.on('scroll', function() {
    var scrollInfo = checkHorizontalScroll(element);
    toggleClasses(element, scrollInfo);
});
$(window).resize(function() {
    var scrollInfo = checkHorizontalScroll(element);
    toggleClasses(element, scrollInfo);
});

// Сортировка
$(function() {
    function initTablesorter() {
        if (window.innerWidth <= 576) { // Если ширина экрана <= 576px
            $(".sortedTable").tablesorter({
                sort: false // Отключаем сортировку
            });
        } else {
            $(".sortedTable").tablesorter({
                headers: {
                    ".table__num": { sorter: false } // Отключаем сортировку для первой колонки (индекс 0)
                },
                sort: true // Включаем сортировку
            });
        }
    }

    // Инициализация при загрузке
    initTablesorter();

    // Обновление при изменении размера окна
    $(window).resize(function() {
        initTablesorter();
    });
});