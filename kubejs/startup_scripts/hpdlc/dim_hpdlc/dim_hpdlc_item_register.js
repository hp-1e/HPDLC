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
    
    //温度调节器
     registerOrgan(new Organ('hpdlc:thermostat')
        .addScore('health', 1)
        .addScore('burning_point', 40)
        .addScore('freezing_point', -40)
        .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng.2"})])
        .addTextLines('default', [Text.gray({ "translate": "hpdlc.tooltips.thermostat.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat.3" })])
        .build())
        .texture('hpdlc:item/dim_hpdlc/thermostat')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:machine')
        .tag('kubejs:resource');
    
    //温度调节器(高温)
     registerOrgan(new Organ('hpdlc:thermostat_hot')
        .addScore('health', 1)
        .addScore('burning_point', 40)
        .addScore('freezing_point', -40)
        .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat_hot.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat_hot.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat_hot.3" })])
        .build())
        .texture('hpdlc:item/dim_hpdlc/thermostat_hot')
        .tag('kubejs:rclick_only')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:machine')
        .tag('kubejs:resource');

    //温度调节器(低温)
     registerOrgan(new Organ('hpdlc:thermostat_cold')
        .addScore('health', 1)
        .addScore('burning_point', 40)
        .addScore('freezing_point', -40)
        .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat_cold.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.thermostat_cold.2" })])
        .build())
        .texture('hpdlc:item/dim_hpdlc/thermostat_cold')
        .tag('kubejs:rclick_only')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:machine')
        .tag('kubejs:resource');


    })