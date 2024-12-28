// priority: 4
ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('hpdlc:newborn_dimension', (item, advanced, text) => {
        text.add(1, [Text.gold({ "translate": "hpdlc.tooltips.newborn_dimension.0" }), Text.yellow(` +${item.nbt?.hpdlcforgeTimes ? item.nbt.hpdlcforgeTimes : 0}`)]);
    })
})