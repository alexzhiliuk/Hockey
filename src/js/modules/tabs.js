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