//原版合成台配方
ServerEvents.recipes(event => {
    //新生维度
    event.shapeless('hpdlc:newborn_dimension', ['hpdlc:newborn_dimension', 'hpdlc:storm_metal_ingot'])
    .modifyResult((grid, stack) => {
        let item1 = grid.find('hpdlc:newborn_dimension', 0)
            let hpdlcforgeTimes = item1.nbt?.hpdlcforgeTimes ?? 0
            stack = Item.of('hpdlc:newborn_dimension', { hpdlcforgeTimes: hpdlcforgeTimes + 1 })
            return stack;
    });
    //海洋之心
    event.shaped('minecraft:heart_of_the_sea',[
        ['minecraft:prismarine_shard','minecraft:prismarine_crystals','minecraft:prismarine_shard'],
        ['minecraft:prismarine_crystals','minecraft:diamond_block','minecraft:prismarine_crystals'],
        ['minecraft:prismarine_shard','minecraft:prismarine_crystals','minecraft:prismarine_shard']
    ]);
    //压缩氧气植入物
    event.shaped('kubejs:compressed_oxygen_implant',[
         ['hpdlc:posundeyasuoyangqizhiruwu','minecraft:iron_ingot','hpdlc:posundeyasuoyangqizhiruwu'],
         [],
         []
     ]);
    //简陋红石熔炉
     event.shaped('hpdlc:primitive_redstone_furnace',[
        ['minecraft:iron_ingot','minecraft:redstone_block','minecraft:iron_ingot'],
        ['minecraft:redstone_block','minecraft:furnace','minecraft:redstone_block'],
        ['minecraft:iron_ingot','minecraft:redstone_block','minecraft:iron_ingot']
     ]);
    // 增幅装置
    event.shaped('hpdlc:amplification_device',[
        ['minecraft:iron_ingot','minecraft:diamond','minecraft:iron_ingot'],
        ['minecraft:iron_ingot','minecraft:redstone','minecraft:iron_ingot'],
        ['minecraft:iron_ingot','minecraft:iron_ingot','minecraft:iron_ingot']
     ]);
    //精细机械手
    event.shaped('hpdlc:precision_manipulator',[
        ['create:precision_mechanism','create:deployer','create:precision_mechanism'],
        ['createaddition:gold_wire','kubejs:silk_for_cutting','createaddition:gold_wire'],
        ['createaddition:gold_wire','createaddition:gold_wire','createaddition:gold_wire']
    ]);
    //机械发条（改）
    event.shaped('hpdlc:jixiefatiaogai',[
        ['kubejs:machine_clockwork','',''],
        [],
        []
    ]);
    //水车
    event.shapeless('hpdlc:water_wheel1',[
        ['create:water_wheel'],
    ]);
    //大型水车
     event.shapeless('hpdlc:large_water_wheel1',[
        ['create:large_water_wheel'],
    ]);
    //风车轴承
    event.shapeless('hpdlc:windmill_bearing1',[
        ['create:windmill_bearing'],
    ]);
    //变速齿轮（改）
    event.shaped('hpdlc:gearbox_gai',[
        [],
        ['create:cogwheel','hpdlc:gearbox1','create:large_cogwheel'],
        []
    ]);
    //变速齿轮（一档）
    event.shaped('hpdlc:gearbox1',[
        ['','create:large_cogwheel',''],
        ['create:andesite_alloy','create:rotation_speed_controller','create:andesite_alloy'],
        ['create:cogwheel','create:cogwheel','create:cogwheel']
    ])

    //变速齿轮（二档）
    event.shaped('hpdlc:gearbox2',[
        ['','create:large_cogwheel',''],
        ['create:brass_ingot','hpdlc:gearbox1','create:brass_ingot'],
        ['minecraft:diamond','create:cogwheel','minecraft:diamond']
    ])

    //变速齿轮（三档）
    event.shaped('hpdlc:gearbox3',[
        ['','create:large_cogwheel',''],
        ['create:precision_mechanism','hpdlc:gearbox2','create:precision_mechanism'],
        ['art_of_forging:forged_steel_ingot','create:cogwheel','art_of_forging:forged_steel_ingot']
    ])

    //喷气推进器（升级改良）
    event.shaped('hpdlc:jet_propeller_gai',[
        ['cataclysm:ignitium_ingot','create:encased_fan','cataclysm:ignitium_ingot'],
        ['irons_spellbooks:dragonskin','nameless_trinkets:ethereal_wings','irons_spellbooks:dragonskin'],
        ['create:encased_fan','kubejs:jet_propeller','create:encased_fan']
    ])
    //高级冰龙心脏
    event.shaped('hpdlc:ice_dragon_heart1',[
        ['iceandfire:dragonsteel_ice_ingot','iceandfire:ice_dragon_blood','iceandfire:dragonsteel_ice_ingot'],
        ['iceandfire:ice_dragon_blood','iceandfire:ice_dragon_heart','iceandfire:ice_dragon_blood'],
        ['iceandfire:dragonsteel_ice_ingot','iceandfire:ice_dragon_blood','iceandfire:dragonsteel_ice_ingot']
    ])
    //高级火龙心脏
    event.shaped('hpdlc:fire_dragon_heart1',[
        ['iceandfire:dragonsteel_fire_ingot','iceandfire:fire_dragon_blood','iceandfire:dragonsteel_fire_ingot'],
        ['iceandfire:fire_dragon_blood','iceandfire:fire_dragon_heart','iceandfire:fire_dragon_blood'],
        ['iceandfire:dragonsteel_fire_ingot','iceandfire:fire_dragon_blood','iceandfire:dragonsteel_fire_ingot']
    ])
    //高级雷龙心脏
    event.shaped('hpdlc:lightning_dragon_heart1',[
        ['iceandfire:dragonsteel_lightning_ingot','iceandfire:lightning_dragon_blood','iceandfire:dragonsteel_lightning_ingot'],
        ['iceandfire:lightning_dragon_blood','iceandfire:lightning_dragon_heart','iceandfire:lightning_dragon_blood'],
        ['iceandfire:dragonsteel_lightning_ingot','iceandfire:lightning_dragon_blood','iceandfire:dragonsteel_lightning_ingot']
    ])

//召唤祭坛配方

    //中枢芯片
    event.recipes.summoningrituals
    .altar('kubejs:ritual_catalyst')
    .id('hpdlc:ritual_cpu1')
    .input('goety:totem_of_roots')
    .input('kubejs:redstone_chipset')
    .input('hpdlc:xinpian')
    .input('4x minecraft:netherite_block')
    .input('64x createaddition:electrum_ingot')
    .itemOutput('hpdlc:cpu1')
    .sacrifice('minecraft:villager', 1)
    .sacrificeRegion(3, 3)
    .dayTime('night')
    .recipeTime(500);

    //灵魂芯片
    event.recipes.summoningrituals
    .altar('kubejs:ritual_catalyst')
    .id('hpdlc:soul_chip')
    .input('3x alexsmobs:soul_heart')
    .input('art_of_forging:enigmatic_construct')
    .input('3x bosses_of_mass_destruction:ancient_anima')
    .input('hpdlc:cpu1')
    .input('goety:arca')
    .input('goety:soul_ruby')
    .input('8x bosses_of_mass_destruction:soul_star')
    .input('8x art_of_forging:soul_ember')
    .input('16x nameless_trinkets:unknown_fragment')
    .itemOutput('hpdlc:soul_chip')
    .sacrifice('minecraft:villager', 1)
    .sacrificeRegion(3, 3)
    .dayTime('night')
    .recipeTime(500);

    //龙袭珍珠
    //自定义珍珠在kubejs→data→自己的命名空间→gateways→珍珠名字.json就能创建一个珍珠
    event.recipes.summoningrituals
    .altar('kubejs:ritual_catalyst')
    .id('hpdlc:dragon_attack')
    .input('iceandfire:dragon_skull_fire')
    .input('iceandfire:dragon_skull_ice')
    .input('iceandfire:dragon_skull_lightning')
    .input('32x minecraft:beef')
    .input('32x minecraft:mutton')
    .input('16x iceandfire:dragon_meal')
    .input('32x iceandfire:dragonbone')
    .itemOutput(Item.of('gateways:gate_pearl', '{gateway:"hpdlc:dragon_attack"}'))
    .recipeTime(500);

    //敲钟人的复仇珍珠
    //自定义珍珠在kubejs→data→自己的命名空间→gateways→珍珠名字.json就能创建一个珍珠
    event.recipes.summoningrituals
    //催化剂
    .altar('kubejs:ritual_catalyst')
    .id('hpdlc:bellringer_vengeance')
    //配方
    .input('8x meetyourfight:phantoplasm')
    .input('16x minecraft:ender_pearl')
    .input('minecraft:nether_star')
    .input('minecraft:bell')
    .input('32x minecraft:gold_ingot')
    .input('64x minecraft:soul_sand')
    //输出
    .itemOutput(Item.of('gateways:gate_pearl', '{gateway:"hpdlc:bellringer_vengeance"}'))
    .recipeTime(500);

     //灾变全家桶
     event.recipes.summoningrituals
     //催化剂
     .altar('kubejs:ritual_catalyst')
     //复制时id记得改
     .id('hpdlc:cataclysm_family')
     //配方
     .input('cataclysm:monstrous_horn')
     .input('cataclysm:witherite_ingot')
     .input('cataclysm:necklace_of_the_desert')
     .input('cataclysm:burning_ashes')
     .input('cataclysm:void_core')
     //输出
     .itemOutput(Item.of('gateways:gate_pearl', '{gateway:"hpdlc:cataclysm_family"}'))
     .recipeTime(500);

     //祸乱鬼魅珍珠
     event.recipes.summoningrituals
     //催化剂
     .altar('kubejs:ritual_catalyst')
     //复制时id记得改
     .id('hpdlc:bomd_family')
     //配方
     .input('bosses_of_mass_destruction:obsidian_heart')
     .input('4x bosses_of_mass_destruction:soul_star')
     .input('bosses_of_mass_destruction:void_thorn')
     .input('bosses_of_mass_destruction:blazing_eye')
     .input('2x bosses_of_mass_destruction:brimstone_nectar')
     //输出
     .itemOutput(Item.of('gateways:gate_pearl', '{gateway:"hpdlc:bomd_family"}'))
     .recipeTime(500);

    //诅咒？恩赐？
    event.recipes.summoningrituals
    //催化剂
    .altar('kubejs:ritual_catalyst')
    .id('hpdlc:curse_favor')
    //配方
    .input('goety:unholy_blood')
    .input('kubejs:god_bless_full_necklace')
    .input('nameless_trinkets:gods_crown')
    .input('minecraft:apple')
    .input('kubejs:god_consciousness')
    .input('cataclysm:abyssal_sacrifice')
    //输出
    .itemOutput('hpdlc:curse_favor')
    .recipeTime(500);

    //原初饥饿
    event.recipes.summoningrituals
    //催化剂
    .altar('kubejs:ritual_catalyst')
    .id('hpdlc:primordial_hungry')
    //配方
    .input('goety:unholy_blood')
    .input('64x minecraft:porkchop')
    .input('64x minecraft:chicken')
    .input('64x minecraft:beef')
    .input('64x minecraft:mutton')
    .input('64x minecraft:rabbit')
    .input('64x chestcavity:raw_butchered_meat')
    .input('biomancy:primordial_core')
    .input('minecraft:nether_star')
    //输出
    .itemOutput('hpdlc:primordial_hungry')
    .recipeTime(500);
    
    //麦乐鸡全家桶
    event.recipes.summoningrituals
    //催化剂
    .altar('kubejs:ritual_catalyst')
    .id('hpdlc:chicken_family')
    //配方
    .input('hpdlc:chicken_liver')
    .input('hpdlc:chicken_appendix')
    .input('hpdlc:chicken_spleen')
    .input('kubejs:chicken_heart')
    .input('kubejs:chicken_kidney')
    .input('kubejs:chicken_lung')
    .input('hpdlc:chicken_stomach')
    .input('hpdlc:chicken_intestine')
    .input('hpdlc:chicken_rib')
    .input('kubejs:chicken_strip')
    .input('minecraft:bucket')
    //输出
    .itemOutput('hpdlc:chicken_family')
    .recipeTime(500);

    //受咒之心
    event.recipes.summoningrituals
    //催化剂
    .altar('kubejs:ritual_catalyst')
    //复制时id记得改
    .id('hpdlc:cursed_heart')
    //配方
    .input('goety:unholy_blood')
    .input('kubejs:unholy_grail')
    .input('kubejs:cursed_soul')
    .input('kubejs:heart_template')
    //输出
    .itemOutput('hpdlc:cursed_heart')
    .recipeTime(500);

    //千咒之魂——改
    event.recipes.summoningrituals
    //催化剂
    .altar('kubejs:ritual_catalyst')
    //复制时id记得改
    .id('hpdlc:cursed_soul_gai')
    //配方
    .input('goety:unholy_blood')
    .input('kubejs:cursed_soul')
    .input('64x graveyard:corruption')
    .input('bosses_of_mass_destruction:ancient_anima')
    //输出
    .itemOutput('hpdlc:cursed_soul_gai')
    //花费时间
    .recipeTime(500);
    
    //诅咒之源
    event.recipes.summoningrituals
    //催化剂
    .altar('kubejs:ritual_catalyst')
    //复制时id记得改
    .id('hpdlc:curse_origin')
    //配方
    .input('64x graveyard:corruption')
    .input('16x goety:dark_ingot')
    .input('art_of_forging:devils_soul_gem')
    .input('goety:unholy_blood')
    .input('kubejs:pandora_active')
    .input('16x minecraft:echo_shard')
    .input('64x art_of_forging:shards_of_malice')
    //输出
    .itemOutput('hpdlc:curse_origin')
    //花费时间
    .recipeTime(500);
});
    
//机械融合砧
ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new WeaponInfusionRecipe(Item.of('hpdlc:amplification_device'), Item.of('goety:reinforced_redstone_block'),Item.of('hpdlc:amplification_device_redstone')))
    registerCustomRecipe(new WeaponInfusionRecipe(Item.of('hpdlc:amplification_device'), Item.of('create:mechanical_saw'),Item.of('hpdlc:amplification_device_cutting')))
})