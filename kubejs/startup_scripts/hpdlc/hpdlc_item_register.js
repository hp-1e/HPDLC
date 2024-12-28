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
    //测试
    registerOrgan(new Organ('hpdlc:ceshi')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.ceshi"})])
    .addScore('health',5)
    .addScore('nerves', 5)
    .addScore('breath_recovery', 5)
    .addScore('strength', 5)
    .addScore('filtration', 5)
    .addScore('detoxification', 5)
    .addScore('defense', 5)
    .addScore('nutrition', 5)
    .addScore('endurance', 1)
    .addScore('digestion', 5)
    .addScore('metabolism',5)
    .addScore('breath_capacity', 1)
    .addScore('speed', 5)
    .build())
    .tag('kubejs:damage_only')
    .tag('kubejs:bear_only');

    //生锈的机械肌肉
    registerOrgan(new Organ('hpdlc:shengxiudejixiejirou')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.shengxiudejixiejirou"})])
    .addScore('strength',1.25)
    .addScore('speed',1.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:muscle');
    
    //机械肌肉
    registerOrgan(new Organ('hpdlc:jixiejirou')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.jixiejirou"})])
    .addScore('strength',1.5)
    .addScore('speed',1.5)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:muscle');

     //生锈的合金肋骨（左）
    registerOrgan(new Organ('hpdlc:shengxiudehejinleiguzuo')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.shengxiudehejinleiguzuo.1"})])
    .addScore('defense',1)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:rib');

    //合金肋骨（左）
    registerOrgan(new Organ('hpdlc:hejinleiguzuo')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.hejinleiguzuo.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.hejinleiguzuo.2"})])
    .addScore('defense',1.5)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:bear_only')
    .tag('kubejs:rib');

    //机械肋骨（左）
    registerOrgan(new Organ('hpdlc:mechanical_ribs_zuo')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.mechanical_ribs_zuo.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.mechanical_ribs_zuo.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.mechanical_ribs_zuo.3"})])
    .addScore('defense',2)
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:bear_only')
    .tag('kubejs:active_only')
    .tag('kubejs:rib');


    //生锈的合金肋骨（右）
    registerOrgan(new Organ('hpdlc:shengxiudehejinleiguyou')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.shengxiudehejinleiguyou.1"})])
    .addScore('defense',1)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:rib');

     //合金肋骨（右）
     registerOrgan(new Organ('hpdlc:hejinleiguyou')
     .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.hejinleiguyou.1"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.hejinleiguyou.2"})])
     .addScore('defense',1)
     .build())
     .tag('kubejs:machine')
     .tag('kubejs:resource')
     .tag('kubejs:bear_only')
     .tag('kubejs:rib');
 
     //机械肋骨（右）
    registerOrgan(new Organ('hpdlc:mechanical_ribs_yuo')
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.mechanical_ribs_yuo.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.mechanical_ribs_yuo.2"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.mechanical_ribs_yuo.3"})])
    .addScore('defense',2)
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:bear_only')
    .tag('kubejs:active_only')
    .tag('kubejs:rib');

    //机械胃
    registerOrgan(new Organ('hpdlc:jixiewei')
    .addTextLines('default',[Text.gray({"translate":"jixiewei"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiewei.1"})])
    .addScore('digestion', 2)
    .addScore('nutrition', 1.2)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:stomach')
    .tag('kubejs:player_tick_only')

    //人造脾
    registerOrgan(new Organ('hpdlc:renzaopi')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.renzaopi"})])
    .addScore('metabolism',1.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:spleen')

    //机械血泵
    registerOrgan(new Organ('hpdlc:jixiexuebeng')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.jixiexuebeng"})])
    .addScore('health',3)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:heart')

    //机械脊柱
    registerOrgan(new Organ('hpdlc:jixiejizhu')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.jixiejizhu"})])
    .addScore('nerves',1.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:spine')

    //肝部过滤器
    registerOrgan(new Organ('hpdlc:ganbuguolvqi')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.ganbuguolvqi"})])
    .addScore('detoxification',1.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:liver')

    //透析器
    registerOrgan(new Organ('hpdlc:touxiqi')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.touxiqi"})])
    .addScore('filtration',1.75)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:kidney')

     //破损的压缩氧气植入物
    registerOrgan(new Organ('hpdlc:posundeyasuoyangqizhiruwu')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.posundeyasuoyangqizhiruwu"})])
    .addScore('breath_recovery',1.5)
    .addScore('detoxification',-0.5)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:lung')

    //生锈的芯片
    registerOrgan(new Organ('hpdlc:shengxiudexinpian')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.shengxiudexinpian"})])
    .addScore('health',-0.25)
    .addScore('nerves', 0.25)
    .addScore('breath_recovery', 0.25)
    .addScore('strength', 0.25)
    .addScore('filtration', 0.25)
    .addScore('detoxification', 0.25)
    .addScore('defense', 0.125)
    .addScore('nutrition', 0.125)
    .addScore('endurance', 1)
    .addScore('digestion', 0.125)
    .addScore('metabolism', 0.125)
    .addScore('breath_capacity', 1)
    .addScore('speed', 0.25)
    .build())
    .tag('kubejs:machine')

    //芯片
    registerOrgan(new Organ('hpdlc:xinpian')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.xinpian"})])
    .addScore('health',-0.5)
    .addScore('nerves', 0.5)
    .addScore('breath_recovery', 0.5)
    .addScore('strength', 0.5)
    .addScore('filtration', 0.5)
    .addScore('detoxification', 0.5)
    .addScore('defense', 2)
    .addScore('nutrition', 0.25)
    .addScore('endurance', 1.5)
    .addScore('digestion', 0.25)
    .addScore('metabolism', 0.25)
    .addScore('breath_capacity', 2)
    .addScore('speed', 0.5)
    .build())
    .tag('kubejs:machine')

    //中枢芯片
    registerOrgan(new Organ('hpdlc:cpu1')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.cpu1.1"})])
    .addTextLines('alt',[Text.gray({"translate":"hpdlc.tooltips.cpu1.2"})])
    .addTextLines('ctrl',[Text.gray({"translate":"hpdlc.tooltips.cpu1.3"})])
    .addTextLines('ctrl',[Text.gray({"translate":"hpdlc.tooltips.cpu1.4"})])
    .addTextLines('ctrl',[Text.gray({"translate":"hpdlc.tooltips.cpu1.5"})])
    .addScore('health',-0.5)
    .addScore('nerves', 0.75)
    .addScore('breath_recovery', 1)
    .addScore('strength', 0.75)
    .addScore('filtration', 0.75)
    .addScore('detoxification', 0.75)
    .addScore('defense', 2.25)
    .addScore('nutrition', 0.5)
    .addScore('endurance', 1.75)
    .addScore('digestion', 0.5)
    .addScore('metabolism', 0.5)
    .addScore('breath_capacity', 2)
    .addScore('speed', 0.75)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active_only')

    //灵魂芯片
    registerOrgan(new Organ('hpdlc:soul_chip')
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.soul_chip.1"})])
    .addTextLines('alt',[Text.gray({"translate":"hpdlc.tooltips.soul_chip.2"})])
    .addTextLines('ctrl',[Text.gray({"translate":"hpdlc.tooltips.soul_chip.3"})])
    .addTextLines('ctrl',[Text.gray({"translate":"hpdlc.tooltips.soul_chip.4"})])
    .addTextLines('ctrl',[Text.gray({"translate":"hpdlc.tooltips.soul_chip.5"})])
    .addTextLines('alt',[Text.gray({"translate":"hpdlc.tooltips.soul_chip.6"})])
    .addScore('health',3)
    .addScore('nerves', 3)
    .addScore('breath_recovery', 3)
    .addScore('strength', 3)
    .addScore('filtration', 3)
    .addScore('detoxification', 3)
    .addScore('defense', 3)
    .addScore('nutrition', 3)
    .addScore('endurance', 3)
    .addScore('digestion', 3)
    .addScore('metabolism', 3)
    .addScore('breath_capacity', 3)
    .addScore('speed', 3)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active_only')
    
    //机械发条（改）
    registerOrgan(new Organ('hpdlc:jixiefatiaogai')
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.jixiefatiaogai.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefatiaogai.2"})])
    .addScore('health',-0.25)
    .addScore('speed',0.25)
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:player_tick')
    .tag('kubejs:resource')
    .tag('kubejs:machine')
    .tag('itemborders:gold');

    //简陋红石熔炉
    registerOrgan(new Organ('hpdlc:primitive_redstone_furnace')
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addScore('health', 0.25)
    .addScore('defense', -0.5)
    .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.primitive_redstone_furnace.2" })])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.primitive_redstone_furnace.3"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:heart')
    .tag('kubejs:resource')
    .tag('kubejs:rclick_only');

    //烈焰熔炉
    registerOrgan(new Organ('hpdlc:flaming_furnace')
    .addScore('health', 0.5)
    .addScore('defense', -1.5)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.flaming_furnace.2" })])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.flaming_furnace.1"})])
    .addTextLines('ctrl',[Text.gray({"translate":"hpdlc.tooltips.flaming_furnace.3"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:heart')
    .tag('kubejs:active')
    .tag('kubejs:resource')
    .tag('kubejs:rclick_only');

    //夜视仪
    registerOrgan(new Organ('hpdlc:night_vision_device')
    .addScore('nerves',-0.25)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.night_vision_device.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.night_vision_device.2"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:player_tick');

    //变速齿轮(一档)
    registerOrgan(new Organ('hpdlc:gearbox1')
    .addScore('speed',8)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.gearbox1.1"})])
    .build())
    .tag('kubejs:machine');

    //变速齿轮(二档)
    registerOrgan(new Organ('hpdlc:gearbox2')
    .addScore('speed',16)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.gearbox2.1"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine');

    //变速齿轮（三档）
    registerOrgan(new Organ('hpdlc:gearbox3')
    .addScore('speed',32)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.gearbox3.1"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine');

    //变速齿轮（改）
    registerOrgan(new Organ('hpdlc:gearbox_gai')
    .addScore('speed',2)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.gearbox_gai.1"})])
    .addTextLines('alt',[Text.gray({"translate":"hpdlc.tooltips.gearbox_gai.2"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:player_tick_only');

    //资源点库
    registerOrgan(new Organ('hpdlc:energy_storage')
    .addScore('strength',1)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.energy_storage.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.energy_storage.2"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:active')
    .tag('kubejs:resource')

    //喷气推进器（升级改良）
    registerOrgan(new Organ('hpdlc:jet_propeller_gai')
    .addScore('speed',2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.jet_propeller_gai.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jet_propeller_gai.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jet_propeller_gai.3"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:damage_only')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active')
    .tag('kubejs:player_tick_only')

    //魔力转化器 
     registerOrgan(new Organ('hpdlc:magic_monverter')
    .addScore('speed',-1)
    .addScore('nerves', 1)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.magic_monverter.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.magic_monverter.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.magic_monverter.3"})])
    //.addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.magic_monverter.4"})])
    //.addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.magic_monverter.6"})])
    //.addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.magic_monverter.7"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    //.tag('kubejs:active_only')
    .tag('kubejs:player_tick_only');

    //微型心火核心
    registerOrgan(new Organ('hpdlc:small_burning_heart')
    .addScore('health',0.5)
    .addScore('speed',0.75)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.small_burning_heart.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.small_burning_heart.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.small_burning_heart.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.small_burning_heart.4"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:player_tick_only');

    //后备隐藏能源
     registerOrgan(new Organ('hpdlc:hidden_reserve_energy')
    .addScore('explosive',3)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.hidden_reserve_energy.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.hidden_reserve_energy.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.hidden_reserve_energy.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.hidden_reserve_energy.4"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active_only')
    .tag('kubejs:key_pressed');

    //多功能机械臂
    registerOrgan(new Organ('hpdlc:multi_functional_robotic_arm')
    .addScore('strength',1.5)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.multi_functional_robotic_arm"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:active_only');

    //动力臂
    registerOrgan(new Organ('hpdlc:steam_powered_mechanical_arm')
    .addScore('strength',2)
    .addScore('health',-0.25)
    .addScore('speed',1)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.steam_powered_mechanical_arm.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.steam_powered_mechanical_arm.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.steam_powered_mechanical_arm.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.steam_powered_mechanical_arm.4"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active_only')
    .tag('kubejs:player_tick')
    .tag('kubejs:muscle');

    //纳米修复昆虫
    registerOrgan(new Organ('hpdlc:nanorepair_insect')
    .addScore('iron_repair', 5)
    .addScore('metabolism',1)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.nanorepair_insect.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.nanorepair_insect.2"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:player_tick_only');

    //精细机械手
    registerOrgan(new Organ('hpdlc:precision_manipulator')
    .addScore('strength', 2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.precision_manipulator.1"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:break_only');

    //基础增幅装置
    registerOrgan(new Organ('hpdlc:amplification_device')
    .addScore('health',1)
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine');

    //增幅装置——红石
    registerOrgan(new Organ('hpdlc:amplification_device_redstone')
    .addScore('health',2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.amplification_device_redstone.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.amplification_device_redstone.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.amplification_device_redstone.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.amplification_device_redstone.4"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:resource')
    .tag('kubejs:damage_only')
    .tag('kubejs:machine');

    //增幅装置——切割
    registerOrgan(new Organ('hpdlc:amplification_device_cutting')
    .addScore('health',2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.amplification_device_cutting.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.amplification_device_cutting.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.amplification_device_cutting.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.amplification_device_cutting.4"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:resource')
    .tag('kubejs:damage_only')
    .tag('kubejs:machine');

    //钢铁外壳
    registerOrgan(new Organ('hpdlc:steel_shell')
    .addScore('defense',3)
    .addScore('iron_repair', 3)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.steel_shell.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.steel_shell.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.steel_shell.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.steel_shell.4"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.steel_shell.5"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:rclick_only')
    .tag('kubejs:bear_only')
    .tag('kubejs:machine');

    //食物鱼缸
    /*
    registerOrgan(new Organ('hpdlc:fish_in_food')
    .addScore('nutrition', 2)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.fish_in_food.0"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.fish_in_food.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.fish_in_food.2"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:food');
    */

    //玻璃容器
    /*
    registerOrgan(new Organ('hpdlc:glass_jar')
    .build())
    */

    //采集锤 
    registerOrgan(new Organ('hpdlc:chain_collection_hammer')
    .addScore('strength', 2)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.chain_collection_hammer.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.chain_collection_hammer.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.chain_collection_hammer.3"})])
    .build())
    .tag('kubejs:break_only')
    .tag('itemborders:gold')
    .tag('kubejs:machine');

    //净化装置
    registerOrgan(new Organ('hpdlc:cleaning_device')
    .addScore('detoxification', 8)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.cleaning_device.1"})])
    .build())
    .tag('kubejs:player_tick_only')
    .tag('itemborders:gold')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //机械盾牌
    registerOrgan(new Organ('hpdlc:mechanical_shield')
    .addScore('defense', 3)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.mechanical_shield.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.mechanical_shield.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.mechanical_shield.3"})])
    .build())
    .tag('kubejs:bear_only')
    .tag('itemborders:gold')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //高级雷龙心脏
    registerOrgan(new Organ('hpdlc:lightning_dragon_heart1')
    .addScore('health', 5)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.lightning_dragon_heart1.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.lightning_dragon_heart1.2"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.lightning_dragon_heart1.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.long"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:damage_only')
    .tag('kubejs:active_only')
    .tag('kubejs:dragon');

    //高级火龙心脏
    registerOrgan(new Organ('hpdlc:fire_dragon_heart1')
    .addScore('health', 5)
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.fire_dragon_heart1.2"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.fire_dragon_heart1.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.long"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:active_only')
    .tag('kubejs:dragon');

    //高级冰龙心脏
    registerOrgan(new Organ('hpdlc:ice_dragon_heart1')
    .addScore('health', 5)
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.ice_dragon_heart1.2"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.ice_dragon_heart1.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.long"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:active_only')
    .tag('kubejs:dragon');

    //可充能式不死图腾
    registerOrgan(new Organ('hpdlc:charged_totem_of_undying')
    .addScore('health', 3)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.charged_totem_of_undying.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.charged_totem_of_undying.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.charged_totem_of_undying.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.charged_totem_of_undying.4"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:bear_only')
    .tag('kubejs:active_only')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //工具箱
    registerOrgan(new Organ('hpdlc:toolbox')
    .addScore('speed', -1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.toolbox.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.toolbox.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.toolbox.3"})])
    .build())
    .tag('kubejs:player_tick_only')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //玫瑰脊柱
    registerOrgan(new Organ('hpdlc:rose_quartz_spine')
    .addScore('nerves', 2)
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.rose_quartz_spine.1"})])
    .build())
    .tag('kubejs:active')
    .tag('itemborders:gold')
    .tag('kubejs:rose');

    //凋零玫瑰肌束
    registerOrgan(new Organ('hpdlc:wither_rose_quartz_muscle')
    .addScore('strength', 2)
    .addScore('nerves', -1)
    .addScore('hydroallergenic', -1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.wither_rose"})])
    .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.wither_rose_quartz_muscle.1" })])
    .build())
    .tag('kubejs:muscle')
    .tag('itemborders:gold')
    .tag('kubejs:rose')
    .tag('kubejs:active');

    //风暴玫瑰肌束
    registerOrgan(new Organ('hpdlc:storm_rose_quartz_muscle')
    .addScore('strength', 6)
    .addScore('nerves', -2)
    .addScore('hydroallergenic', -2)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.wither_storm"})])
    .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.storm_rose_quartz_muscle.1" })])
    .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.storm_rose_quartz_muscle.2" })])
    .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.storm_rose_quartz_muscle.3" })])
    .build())
    .tag('kubejs:muscle')
    .tag('itemborders:gold')
    .tag('kubejs:rose')
    .tag('kubejs:hpdlc_storm')
    .tag('kubejs:active_only')
    .tag('kubejs:active');

    //凋零玫瑰肝脏
    registerOrgan(new Organ('hpdlc:wither_rose_quartz_liver')
    .addScore('detoxification', 2)
    .addScore('nerves', -1)
    .addScore('hydroallergenic', -1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.wither_rose"})])
    .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.wither_rose_quartz_liver.1" })])
    .build())
    .tag('kubejs:liver')
    .tag('itemborders:gold')
    .tag('kubejs:rose')
    .tag('kubejs:active');

    //风暴玫瑰肝脏
    registerOrgan(new Organ('hpdlc:storm_rose_quartz_liver')
    .addScore('detoxification', 4)
    .addScore('nerves', -2)
    .addScore('hydroallergenic', -2)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.wither_storm"})])
    .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.storm_rose_quartz_liver.1" })])
    .build())
    .tag('kubejs:liver')
    .tag('itemborders:gold')
    .tag('kubejs:rose')
    .tag('kubejs:hpdlc_storm')
    .tag('kubejs:active');

    //凋零玫瑰心脏
    registerOrgan(new Organ('hpdlc:wither_rose_quartz_heart')
    .addScore('health', 2)
    .addScore('nerves', -1)
    .addScore('hydroallergenic', -1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.wither_rose"})])
    .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.wither_rose_quartz_heart.1" })])
    .build())
    .tag('kubejs:heart')
    .tag('itemborders:gold')
    .tag('kubejs:rose')
    .tag('kubejs:active');

    //风暴玫瑰心脏
    registerOrgan(new Organ('hpdlc:storm_rose_quartz_heart')
    .addScore('health', 4)
    .addScore('nerves', -2)
    .addScore('hydroallergenic', -2)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.wither_storm"})])
    .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.storm_rose_quartz_heart.1" })])
    .build())
    .tag('kubejs:heart')
    .tag('itemborders:gold')
    .tag('kubejs:rose')
    .tag('kubejs:hpdlc_storm')
    .tag('kubejs:active');

    //微型分解工厂
    registerOrgan(new Organ('hpdlc:micro_processing_factory')
    .addScore('speed', -2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.micro_processing_factory.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.micro_processing_factory.2"})])
    .build())
    .tag('kubejs:loot_entity_only')
    .tag('kubejs:damage_only')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //龙炎动力臂
    registerOrgan(new Organ('hpdlc:fire_steam_powered_mechanical_arm')
    .addScore('strength',4)
    .addScore('health',-0.5)
    .addScore('speed',2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.fire_steam_powered_mechanical_arm.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.fire_steam_powered_mechanical_arm.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.fire_steam_powered_mechanical_arm.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.fire_steam_powered_mechanical_arm.4"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.fire_steam_powered_mechanical_arm.5"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active_only')
    .tag('kubejs:damage_only')
    .tag('kubejs:player_tick')
    .tag('kubejs:muscle');

     //凋零动力臂
     registerOrgan(new Organ('hpdlc:storm_steam_powered_mechanical_arm')
     .addScore('strength',8)
     .addScore('health',-2)
     .addScore('speed',3)
     .addScore('withered', 5)
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
     .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.storm_steam_powered_mechanical_arm.1"})])
     .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.storm_steam_powered_mechanical_arm.2"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.storm_steam_powered_mechanical_arm.3"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.storm_steam_powered_mechanical_arm.4"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.storm_steam_powered_mechanical_arm.5"})])
     .build())
     .tag('itemborders:iron')
     .tag('kubejs:machine')
     .tag('kubejs:resource')
     .tag('kubejs:active_only')
     .tag('kubejs:damage_only')
     .tag('kubejs:player_tick')
     .tag('kubejs:muscle');

     //僵尸之心
     registerOrgan(new Organ('hpdlc:zombie_heart')
     .addScore('health', 0.5)
     .addScore('fire_resistant', -3)
     .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.zombie_heart.1"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.zombie_heart.2"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.zombie_heart.3"})])
     .build())
     .tag('kubejs:heart')
     .tag('kubejs:bear_only')
     .tag('kubejs:player_tick_only');

     //魂火
     registerOrgan(new Organ('hpdlc:soul_fire')
     .addScore('strength', 1.5)
     .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.soul_fire.1"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.soul_fire.2"})])
     .build())
     .tag('kubejs:damage_only');

     //黄金之爱——僵尸猪灵
     registerOrgan(new Organ('hpdlc:golden_love1')
     .addScore('strength', 1.5)
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.golden_love1.1"})])
     .build())
     .tag('kubejs:bear_only');

     //黄金之爱——猪灵
     registerOrgan(new Organ('hpdlc:golden_love2')
     .addScore('strength', 1.5)
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.golden_love2.1"})])
     .build())
     .tag('kubejs:player_tick_only');

     //黄金之爱——蛮兵
     registerOrgan(new Organ('hpdlc:golden_love3')
     .addScore('strength', 1.5)
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.golden_love3.1"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.golden_love3.2"})])
     .build())
     .tag('kubejs:damage_only');

     //金色书龙鳞片
     /*
    registerOrgan(new Organ('hpdlc:book_wyrm_scale1')
    .addScore('defense',1)
    .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.book_wyrm_scale1.1" })])
    .build())
    .tag('kubejs:key_pressed');*/

    //古老的不死图腾
    registerOrgan(new Organ('hpdlc:totem_of_undying1')
    .addScore('health', 1.5)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.totem_of_undying1.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.totem_of_undying1.2"})])
    .build())
    .tag('kubejs:bear_only');

    //灾厄之魂——卫道士
    registerOrgan(new Organ('hpdlc:soul_disaster')
    .addScore('strength', 1.5)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.soul_disaster.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.soul_disaster.2"})])
    .build())
    .tag('kubejs:damage_only');

    //不稳定的火药
    registerOrgan(new Organ('hpdlc:gunpowder1')
    .addScore('explosive',1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.gunpowder1.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.gunpowder1.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.gunpowder1.3"})])
    .build())
    .tag('kubejs:damage_only');

    //导热棒
    registerOrgan(new Organ('hpdlc:thermal_conductivity_rod')
    .addScore('hydroallergenic', 3)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.thermal_conductivity_rod.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.thermal_conductivity_rod.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.thermal_conductivity_rod.3"})])
    .build())
    .tag('kubejs:player_tick_only');

    //疣猪皮
    registerOrgan(new Organ('hpdlc:hogskin1')
    .addScore('defense', 1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.hogskin1.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.hogskin1.2"})])
    .build())
    .tag('kubejs:bear_only');

    //钢铁
    registerOrgan(new Organ('hpdlc:steel1')
    .addScore('defense', 1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.steel1.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.steel1.2"})])
    .build())
    .tag('kubejs:bear_only');

    //末影核心
    registerOrgan(new Organ('hpdlc:ender_pearl1')
    .addScore('hydroallergenic', 1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.ender_pearl1.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.ender_pearl1.2"})])
    .build())
    .tag('kubejs:magic')
    .tag('kubejs:active');

    //未知的药水
    registerOrgan(new Organ('hpdlc:unknown_potion')
    .addScore('luck', 1)
    .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.unknown_potion.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.unknown_potion.2"})])
    .build())
    .tag('kubejs:magic')
    .tag('kubejs:damage_only');

    //肝型麦乐鸡
    registerOrgan(new Organ('hpdlc:chicken_liver')
        .addScore('detoxification', 1.75)
        .addScore('luck', 1.75)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_liver.1" })])
        .build())
        .food(food => { food.hunger(6).saturation(1) })
        .tag('kubejs:liver')
        .tag('kubejs:player_tick_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    //阑尾型麦乐鸡
    registerOrgan(new Organ('hpdlc:chicken_appendix')
        .addScore('luck', 3)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_appendix.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_appendix.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_appendix.3" })])
        .build())
        .food(food => { food.hunger(4).saturation(1) })
        .tag('kubejs:appendix')
        .tag('kubejs:loot_chest_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    //脾型麦乐鸡
    registerOrgan(new Organ('hpdlc:chicken_spleen')
        .addScore('luck', 1.75)
        .addScore('metabolism',1.75)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_spleen.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_spleen.2" })])
        .build())
        .food(food => { food.hunger(3).saturation(0.6) })
        .tag('kubejs:spleen')
        .tag('kubejs:player_tick_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    //肠型麦乐鸡
    registerOrgan(new Organ('hpdlc:chicken_intestine')
        .addScore('luck', 1.75)
        .addScore('nutrition',1.75)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_intestine.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_intestine.2" })])
        .build())
        .food(food => { food.hunger(6).saturation(1) })
        .tag('kubejs:intestine')
        .tag('kubejs:player_tick_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    //胃型麦乐鸡
    registerOrgan(new Organ('hpdlc:chicken_stomach')
        .addScore('luck', 1.75)
        .addScore('digestion',1.75)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_stomach.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_stomach.2" })])
        .build())
        .food(food => { food.hunger(6).saturation(1) })
        .tag('kubejs:stomach')
        .tag('kubejs:eat_effect_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');
    
    //肋骨型麦乐鸡
    registerOrgan(new Organ('hpdlc:chicken_rib')
        .addScore('luck', 1.75)
        .addScore('defense',1.75)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_rib.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_rib.2" })])
        .build())
        .food(food => { food.hunger(6).saturation(1) })
        .tag('kubejs:rib')
        .tag('kubejs:bear_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    //脊柱型麦乐鸡
    /*
    registerOrgan(new Organ('hpdlc:chicken_spine')
        .addScore('luck', 1.75)
        .addScore('nerves',1.75)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_spine.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_spine.2" })])
        .build())
        .food(food => { food.hunger(6).saturation(1) })
        .tag('kubejs:spine')
        .tag('kubejs:player_tick_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    */

    //麦乐鸡全家桶
    registerOrgan(new Organ('hpdlc:chicken_family')
        .addScore('luck', 4)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_family.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chicken_family.2" })])
        .build())
        .food(food => { food.hunger(13).saturation(3) })
        .tag('kubejs:active_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');
    
    //诅咒？恩赐？
    registerOrgan(new Organ('hpdlc:curse_favor')
        .addScore('luck', 5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.curse_favor.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.curse_favor.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.curse_favor.3" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.curse_favor.4" })])
        .build())
        .food(food => { food.hunger(55).saturation(2.75) })
        .tag('kubejs:food')
        .tag('kubejs:damage_only');
    
    //人肉宴
    registerOrgan(new Organ('hpdlc:man_met')
        .addScore('health', -2)
        .addScore('nerves', 0.25)
        .addScore('breath_recovery', 0.25)
        .addScore('strength', 0.25)
        .addScore('filtration', 0.25)
        .addScore('detoxification', 0.25)
        .addScore('defense', 0.125)
        .addScore('nutrition', 0.125)
        .addScore('endurance', 0.25)
        .addScore('digestion', 0.125)
        .addScore('metabolism', 0.125)
        .addScore('breath_capacity', 0.125)
        .addScore('speed', 0.25)
        .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.man_met.1"})])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.man_met.2" })])
        .build())
        .food(food => { food.hunger(26).saturation(2.6) })
        .tag('kubejs:food')
        .tag('kubejs:warp')
        .tag('kubejs:player_tick_only');
    
    //原初—饥饿
    registerOrgan(new Organ('hpdlc:primordial_hungry')
        .addScore('endurance', -3)
        .addScore('nerves', 1)
        .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.primordial_hungry.1"})])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.primordial_hungry.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.primordial_hungry.3" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.primordial_hungry.4" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.primordial_hungry.5" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.primordial_hungry.6" })])
        .build())
        .tag('kubejs:player_tick_only')
        .tag('itemborders:gold')
        .tag('kubejs:damage_only');
    
    //穿梭器
    registerOrgan(new Organ('hpdlc:chuansuo')
        .addScore('speed',-1)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.chuansuo" })])
        .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
        .build())
        .tag('kubejs:machine')
        .tag('kubejs:resource')
        .tag('kubejs:key_pressed');
    
    //粉碎机
    registerOrgan(new Organ('hpdlc:pulverizer1')
        .addScore('strength',1)
        .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"hpdlc.tooltips.jixiefeisheng"})])
        .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.pulverizer1.1"})])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.pulverizer1.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.pulverizer1.3" })])
        .build())
        .tag('kubejs:machine')
        .tag('kubejs:resource')
        .tag('kubejs:break_only');

    //受咒之心
    registerOrgan(new Organ('hpdlc:cursed_heart')
        .addScore('health',3)
        .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.cursed_heart.1"})])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.cursed_heart.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.cursed_heart.3" })])
        .build())
        .tag('kubejs:heart')
        .tag('kubejs:hpdlc_curse')
        .tag('kubejs:damage_only');

    //新生维度
    registerOrgan(new Organ('hpdlc:newborn_dimension')
        .addScore('health',5)
        .addScore('nerves', 5)
        .addScore('breath_recovery', 5)
        .addScore('strength', 5)
        .addScore('filtration', 5)
        .addScore('detoxification', 5)
        .addScore('defense', 5)
        .addScore('nutrition', 5)
        .addScore('endurance', 5)
        .addScore('digestion', 5)
        .addScore('metabolism',5)
        .addScore('breath_capacity', 5)
        .addScore('speed', 5)
        .addTextLines('default',[Text.gray({"translate":"hpdlc.tooltips.newborn_dimension.1"})])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.newborn_dimension.2" })])
        .build())
        .tag('kubejs:infinity')
        .tag('kubejs:machine')
        .tag('kubejs:hpdlc_dimension')
        .tag('itemborders:diamond');

    //千咒之魂——改
    registerOrgan(new Organ('hpdlc:cursed_soul_gai')
        .addScore('strength', -1)
        .addScore('nerves', 1.25)
        .addScore('detoxification', -0.5)
        .addTextLines('default', [Text.gray({ "translate": "hpdlc.tooltips.cursed_soul_gai.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.cursed_soul_gai.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.cursed_soul_gai.3" })])
        .build())
        .tag('kubejs:bear_only')
        .tag('kubejs:hpdlc_curse')
        .tag('kubejs:relics');

    //诅咒之源
     registerOrgan(new Organ('hpdlc:curse_origin')
        .addScore('health', -2)
        .addTextLines('default', [Text.gray({ "translate": "hpdlc.tooltips.curse_origin.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.curse_origin.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "hpdlc.tooltips.curse_origin.3" })])
        .build())
        .tag('kubejs:player_tick_only')
        .tag('kubejs:hpdlc_curse')
        .tag('kubejs:relics');
    
    //风暴金属板
    registerOrgan(new Organ('hpdlc:storm_metal_plate1')
        .addScore('health', 0.5)
        .addScore('nerves', 0.5)
        .addScore('breath_recovery', 0.5)
        .addScore('strength', 0.5)
        .addScore('filtration', 0.5)
        .addScore('detoxification', 0.5)
        .addScore('defense', 0.25)
        .addScore('nutrition', 0.25)
        .addScore('endurance', 0.5)
        .addScore('digestion', 0.25)
        .addScore('metabolism', 0.5)
        .addScore('breath_capacity', 0.5)
        .addScore('speed', 0.5)
        .build())
        .tag('kubejs:relics');
})