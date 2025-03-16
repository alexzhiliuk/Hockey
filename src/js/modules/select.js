$(".select").each(function(i, select) {
    const ul = $("<ul>", {class: "select__choices"})

    let selectedText = ""

    $(select).find("select").find("option").each(function(i, option) {
        const li = $("<li>", {
            class: "select__choice",
            text: $(option).text(),
            'data-value': $(option).val()
        })

        if (option.selected) { selectedText = $(option).text()}

        ul.append(li)
    })

    ul.on("click", ".select__choice", function() {
        let value = $(this).attr("data-value"),
            text = $(this).text()

        $(this).parents(".select").find("select").val(value)
        $(this).parents(".select").find(".select__chosen").text(text)
    })

    ul.insertAfter($(select).find(".select__chosen"))
    $(select).find(".select__chosen").text(selectedText)
})

$(".select").click(function() {
    $(this).toggleClass("select_open")
})

$(".select__prev").click(function(e) {
    e.stopPropagation()
    let prev = $(this).parents(".select").find("option:selected").prev()
    if (!prev.length) { return }

    let value = prev.val(),
        text = prev.text()
    
    $(this).parents(".select").find("select").val(value)
    $(this).parents(".select").find(".select__chosen").text(text)
})

$(".select__next").click(function(e) {
    e.stopPropagation()
    let next = $(this).parents(".select").find("option:selected").next()
    if (!next.length) { return }

    let value = next.val(),
        text = next.text()
    
    $(this).parents(".select").find("select").val(value)
    $(this).parents(".select").find(".select__chosen").text(text)
})