StartupEvents.registry('item', event => {
    /**
     * 
     * @param {organ} organ
     * @returns {Internal.BasicItemJS$Builder}
     */
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.hpdlc")
        if (organ.ctrlTextLines.length > 0) {
            builder.tag('chestcavity:active')
        }
        if (organ.altTextLines.length > 0) {
            builder.tag('chestcavity:special')
        }
        return builder
      }
    
    //恒温器
     registerOrgan(new Organ('hpdlc:thermostat')
        .addScore('health', 1)
        .addScore('burning_point', 40)
        .addScore('freezing_point', -40)
        .addTextLines('default', [Text.gray({ "translate": "hpdlc.tooltips.thermostat.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat.3" })])
        .build())
        .texture('hpdlc:item/dim_hpdlc/thermostat')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:machine')
        .tag('kubejs:resource');

    })