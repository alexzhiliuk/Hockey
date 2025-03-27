$(".select").each(function(i, select) {
    const ul = $("<ul>", {class: "select__choices"})

    let selectedText = ""

    $(select).find("select").find("option").each(function(i, option) {
        const li = $("<li>", {
            class: "select__choice",
            text: $(option).text(),
            'data-value': $(option).val()
        })

        if (option.selected) { 
            selectedText = $(option).text()
            li.addClass("select__choice_active")
        }

        ul.append(li)
    })

    ul.on("click", ".select__choice", function() {
        let value = $(this).attr("data-value"),
            text = $(this).text()

        $(this).parents(".select").find("select").val(value)
        $(this).parents(".select").find(".select__chosen").text(text)
        
        $(this).siblings(".select__choice").removeClass("select__choice_active")
        $(this).addClass("select__choice_active")
    })

    ul.insertAfter($(select).find(".select__chosen"))
    $(select).find(".select__chosen").text(selectedText)
})

$(".select").click(function() {
    let openClass = "select_open"

    if ($(this).hasClass(openClass)) {
        $(this).removeClass(openClass)
    } else {
        $(".select").removeClass(openClass)
        $(this).addClass(openClass)
    }
})

$(".select__prev").click(function(e) {
    e.stopPropagation()
    let prev = $(this).parents(".select").find("option:selected").prev()
    if (!prev.length) { return }

    let value = prev.val(),
        text = prev.text()
    
    $(this).parents(".select").find("select").val(value)
    $(this).parents(".select").find(".select__chosen").text(text)
    $(this).parents(".select").find(`.select__choice`).removeClass("select__choice_active")
    $(this).parents(".select").find(`.select__choice[data-value=${value}]`).addClass("select__choice_active")
})

$(".select__next").click(function(e) {
    e.stopPropagation()
    let next = $(this).parents(".select").find("option:selected").next()
    if (!next.length) { return }

    let value = next.val(),
        text = next.text()
    
    $(this).parents(".select").find("select").val(value)
    $(this).parents(".select").find(".select__chosen").text(text)
    $(this).parents(".select").find(`.select__choice`).removeClass("select__choice_active")
    $(this).parents(".select").find(`.select__choice[data-value=${value}]`).addClass("select__choice_active")
})

// Удалить
$(".select_month").each(function(i, select) {
    $(select).find("select").val("5")
    $(select).find(".select__chosen").text("Май")
    $(select).find(`.select__choice`).removeClass("select__choice_active")
    $(select).find(`.select__choice[data-value=5]`).addClass("select__choice_active")
})