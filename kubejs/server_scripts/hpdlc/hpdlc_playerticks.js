// priority: 9

/**
 * 玩家Tick秒级策略
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const  hpdlcorganPlayerTickStrategies = {
    //机械发条（改）
    'hpdlc:jixiefatiaogai': function (event, organ) {
        let player = event.player
        let count = player.persistentData.getInt(resourceCount)
        if (player.isSprinting()) {
            let speed = Math.floor(player.getSpeed() * 30)
            updateResourceCount(player, count + speed)
        }
    },

    //夜视仪
    'hpdlc:night_vision_device': function (event,organ){
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let player = event.player
            if (count >= 50) {
                if (player.hasEffect('minecraft:night_vision')) {
                    // 获取已有的夜视效果
                    let effect = player.getEffect('minecraft:night_vision')
                    // 获取效果等级
                    let amplifier = effect.getAmplifier()
                    // 获取效果时长
                    let duration = effect.getDuration()
                    if (duration <= 20 * 60){
                    // 增加效果
                    player.potionEffects.add('minecraft:night_vision', duration + 20 * 60, amplifier)
                    updateResourceCount(event.entity, count - 50)
                }}
                // 否则执行以下逻辑
                else { 
                    // 增加效果
                    player.potionEffects.add('minecraft:night_vision', 20 * 60, 0)
                    updateResourceCount(event.entity, count - 50)
                }
            }
            },
    //动力臂
    'hpdlc:steam_powered_mechanical_arm': function (event,organ){
        let player = event.player
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 2) {
            updateResourceCount(event.entity, count - 2)
        }
        else{
            if (player.hasEffect('minecraft:weakness')) {
                // 获取已有虚弱的效果
                let effect = player.getEffect('minecraft:weakness')
                // 获取效果等级
                let amplifier = effect.getAmplifier()
                // 获取效果时长
                let duration = effect.getDuration()
                if (duration <= 20 * 60){
                // 增加效果
                player.potionEffects.add('minecraft:weakness', duration + 20 * 60, amplifier)
            }}
            // 否则执行以下逻辑
            else { 
                // 增加效果
                player.potionEffects.add('minecraft:weakness', 20 * 60, 0)
            }
        }
        }  ,
     //龙炎动力臂
     'hpdlc:fire_steam_powered_mechanical_arm': function (event,organ){
        let player = event.player
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 4) {
            updateResourceCount(event.entity, count - 4)
        }
        else{
            if (player.hasEffect('minecraft:weakness')) {
                // 获取已有虚弱的效果
                let effect = player.getEffect('minecraft:weakness')
                // 获取效果等级
                let amplifier = effect.getAmplifier()
                // 获取效果时长
                let duration = effect.getDuration()
                if (duration <= 20 * 60){
                // 增加效果
                player.potionEffects.add('minecraft:weakness', duration + 20 * 60, amplifier)
            }}
            // 否则执行以下逻辑
            else { 
                // 增加效果
                player.potionEffects.add('minecraft:weakness', 20 * 60, 0)
            }
        }
        }  ,
    //凋零动力臂
    'hpdlc:storm_steam_powered_mechanical_arm': function (event,organ){
        let player = event.player
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 8) {
            updateResourceCount(event.entity, count - 8)
        }
        else{
            if (player.hasEffect('minecraft:wither')) {
                // 获取已有效果
                let effect = player.getEffect('minecraft:wither')
                // 获取效果等级
                let amplifier = effect.getAmplifier()
                // 获取效果时长
                let duration = effect.getDuration()
                if (duration <= 20 * 60){
                // 增加效果
                player.potionEffects.add('minecraft:wither', duration + 20 * 60, amplifier)
            }}
            // 否则执行以下逻辑
            else { 
                // 增加效果
                player.potionEffects.add('minecraft:wither', 20 * 60, 0)
            }
        }
        },
}
var assign_organ_player_player_tick = Object.assign( organPlayerTickStrategies,  hpdlcorganPlayerTickStrategies)

/**
 * 玩家Tick秒级唯一策略
 * 是的，这玩意是每秒而非每刻执行一次
 * 对应.tag('kubejs:player_tick_only')
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const hpdlcOrganPlayerTickOnlyStrategies = {
//魔力转化器
    'hpdlc:magic_monverter':function(event,organ){
        let player = event.player
        let manaMax = player.getAttributeTotalValue('irons_spellbooks:max_mana')
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        updateResourceCount(player, count + manaMax * 0.01 )
        magicData.setMana(Math.max((manaCost - manaMax * 0.01), 0))
    },
//微型心火核心
    'hpdlc:small_burning_heart': function (event, organ) {
    let player = event.player;
    let count = player.persistentData.getInt(resourceCount) ?? 0
    let maxcount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
    if (count < 50)return
        if (count >= 100 && count >= maxcount * 0.8){
            updateResourceCount(player, count - 100)
            player.potionEffects.add('kubejs:flaring_heart', 20 * 2, 2)
        }
        if (count > 50 && 0.5 * maxcount < count && count < maxcount * 0.8){
            updateResourceCount(player, count - 50)
            player.potionEffects.add('kubejs:flaring_heart', 20 * 2, 1)
        }
        if (25 <= count && count <= maxcount * 0.5){
            updateResourceCount(player, count - 25)
            player.potionEffects.add('kubejs:flaring_heart', 20 * 2, 0)
        }

},
//纳米修复昆虫
    'hpdlc:nanorepair_insect':function(event,organ){
        let player = event.player;
        let typeMap = getPlayerChestCavityTypeMap(player);
        let count = event.entity.persistentData.getInt(resourceCount) ?? 0;
        let amplifier = 0
        if (typeMap.has('kubejs:resource')) {
            amplifier = typeMap.get('kubejs:resource').length
 }
          let a = Math.floor (amplifier / 9);
           if(count >= a){
            if (player.health != player.maxHealth && player.health < player.maxHealth) {
                player.heal(a)
                updateResourceCount(event.entity, count - a)
           }
        }
    },
    //变速齿轮（改）
    'hpdlc:gearbox_gai':function(event,organ){
    let player = event.player
    if (player.hasEffect('minecraft:haste'))return
    player.potionEffects.add('minecraft:haste', 20 * 60, 0)
},
    //净化装置
    'hpdlc:cleaning_device':function(event,organ){
    let entity = event.entity
    let player = event.player
    let a = hpGetComputingPower(player)
    let harmfulEffects = []
    let random = Math.random() * 100
    if ( random <= a * 2){
    entity.potionEffects.active.forEach(ctx => {
        if (ctx.effect.CC_IsHarmful()) {
            harmfulEffects.push(ctx.effect)
        }
    })
        if (harmfulEffects.length > 0) {
        harmfulEffects.forEach(effect => {
            entity.removeEffect(effect)
        })
    }
} 
},
    //机械胃
    'hpdlc:jixiewei': function (event,organ) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let player = event.player
        if (count >= 2) {
            if (player.health != player.maxHealth && player.health < player.maxHealth) {
                player.heal(1)
                updateResourceCount(event.entity, count - 2)
                player.potionEffects.add('farmersdelight:nourishment', 20 * 3, 0)
            }
            }
},
    //工具箱
    'hpdlc:toolbox': function (event,organ) {
        let player = event.player
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        let mainitem = player.mainHandItem
        if (count >= maxCount / 2 ) {
            if (mainitem.damageValue >= 20){
                mainitem.damageValue = Math.max(mainitem.damageValue-20,0)
                updateResourceCount(event.entity, count - 20)
            }
        }
},
    //僵尸之心
    'hpdlc:zombie_heart': function (event,organ) {
    let player = event.player
    if (player.hasEffect('minecraft:poison')) {
        player.removeEffect('minecraft:poison')
}
},
    //黄金之爱——猪灵
    'hpdlc:golden_love2': function (event,organ) {
    let player = event.player
    if (player.getHeadArmorItem() != 'minecraft:golden_helmet' && player.getHeadArmorItem() !='bygonenether:gilded_netherite_helmet') return
    if (player.getChestArmorItem() != 'minecraft:golden_chestplate' && player.getChestArmorItem() != 'bygonenether:gilded_netherite_chestplate')return
    if (player.getLegsArmorItem() != 'minecraft:golden_leggings' && player.getLegsArmorItem() != 'bygonenether:gilded_netherite_leggings') return
    if (player.getFeetArmorItem() != 'minecraft:golden_boots' && player.getFeetArmorItem() !='bygonenether:gilded_netherite_boots') return
    player.getHeadArmorItem().nbt.merge({ Unbreakable: 1 })
    player.getChestArmorItem().nbt.merge({ Unbreakable: 1 })
    player.getLegsArmorItem().nbt.merge({ Unbreakable: 1 })
    player.getFeetArmorItem().nbt.merge({ Unbreakable: 1 })
    if (player.getMainHandItem() != 'minecraft:golden_sword' && player.getMainHandItem() != 'minecraft:golden_axe' )return
        player.getMainHandItem().nbt.merge({ Unbreakable: 1 })
    },
    //导热棒
    'hpdlc:thermal_conductivity_rod':function(event,organ){
        let player = event.player
        if (!isPlayerOnFire(player)) {return}
        player.heal(1)
        getPlayerMagicData(player).addMana(10)
},
//肝型麦乐鸡
'hpdlc:chicken_liver':function(event,organ){
    let entity = event.entity
    let player = event.player
    let luck = Math.max(player.getLuck(), 1)
    let harmfulEffects = []
    let random = Math.random() * 100
    if ( random < luck * 2){
    entity.potionEffects.active.forEach(ctx => {
        if (ctx.effect.CC_IsHarmful()) {
            harmfulEffects.push(ctx.effect)
        }
    })
        if (harmfulEffects.length > 0) {
        harmfulEffects.forEach(effect => {
            entity.removeEffect(effect)
        })
    }
    }
},
//脾型麦乐鸡
'hpdlc:chicken_spleen':function(event,organ){
    let player = event.player
    let luck = Math.max(player.getLuck(), 1)
    if (player.health != player.maxHealth && player.health < player.maxHealth) {
        if(Math.random() * (100 + luck) >= 50 ){
                player.heal(luck / 30)}
        if(Math.random() * (100 + luck) < 50 ){
            if (player.health > luck / 30){
                player.attack(luck / 30)}}
}
},
//肠型麦乐鸡
'hpdlc:chicken_intestine':function(event,organ){
    let player = event.player
    let luck = Math.max(player.getLuck(), 1)
    event.player.setFoodLevel(Math.min(event.player.getFoodLevel() + luck/20/3.3, 20))
        if(Math.random() * (100 + luck) < 50 ){
            event.player.setSaturation(Math.max(event.player.getSaturation() - 2, 0))}
},
//人肉宴
'hpdlc:man_met':function(event,organ){
    let count = event.player.persistentData.getInt(warpCount) ?? 0
    if (Math.random() * 100 >= 99)
    updateWarpCount(event.player, count + 1)
},
//原初饥饿
'hpdlc:primordial_hungry': function (event,organ) {
    let player = event.player
    let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:food')) {
                amplifier = amplifier + typeMap.get('kubejs:food').length
    }
    player.potionEffects.add('minecraft:hunger', 20 * 30, 99 - amplifier)
    event.player.setFoodLevel(Math.max(event.player.getFoodLevel() - 2, 0))
    if (event.player.getFoodLevel() <= 1){
        player.attack(Math.max(player.maxHealth / 20,6))
    }
},
//诅咒之源
'hpdlc:curse_origin': function (event,organ) {
    let player = event.entity
    let warp = player.persistentData.getInt(warpCount)
    if (warp < 50)return
    if (Math.random() * 100 > warp / 50)return
    updateWarpCount(player, warp - 50)
    //主手
    player.getMainHandItem().enchantments.forEach((name, level) => {
        if (curseEnchantList.some(ele => ele == name)) {
            player.getMainHandItem().nbt.Enchantments =  player.getMainHandItem().nbt.Enchantments.filter(function (item) {
                return item.id != name
        })
        player.setMainHandItem(player.getMainHandItem().enchant(name,level + 1))
    }
})
    //副手
    player.getOffHandItem().enchantments.forEach((name, level) => {
        if (curseEnchantList.some(ele => ele == name)) {
            player.getOffHandItem().nbt.Enchantments =  player.getOffHandItem().nbt.Enchantments.filter(function (item) {
                return item.id != name
        })
        player.setOffHandItem(player.getOffHandItem().enchant(name,level + 1))
    }
})
    //头盔
    player.getHeadArmorItem().enchantments.forEach((name, level) => {
        if (curseEnchantList.some(ele => ele == name)) {
            player.getHeadArmorItem().nbt.Enchantments =  player.getHeadArmorItem().nbt.Enchantments.filter(function (item) {
                return item.id != name
        })
        player.setHeadArmorItem(player.getHeadArmorItem().enchant(name,level + 1))
    }
})
    //胸甲
    player.getChestArmorItem().enchantments.forEach((name, level) => {
        if (curseEnchantList.some(ele => ele == name)) {
            player.getChestArmorItem().nbt.Enchantments =  player.getChestArmorItem().nbt.Enchantments.filter(function (item) {
                return item.id != name
        })
        player.setChestArmorItem(player.getChestArmorItem().enchant(name,level + 1))
    }
})
    //裤衩
    player.getLegsArmorItem().enchantments.forEach((name, level) => {
        if (curseEnchantList.some(ele => ele == name)) {
            player.getLegsArmorItem().nbt.Enchantments =  player.getLegsArmorItem().nbt.Enchantments.filter(function (item) {
                return item.id != name
        })
        player.setLegsArmorItem(player.getLegsArmorItem().enchant(name,level + 1))
    }
})
    //靴子
    player.getFeetArmorItem().enchantments.forEach((name, level) => {
        if (curseEnchantList.some(ele => ele == name)) {
            player.getFeetArmorItem().nbt.Enchantments =  player.getFeetArmorItem().nbt.Enchantments.filter(function (item) {
                return item.id != name
        })
        player.setFeetArmorItem(player.getFeetArmorItem().enchant(name,level + 1))
    }
})  
},
 //喷气推进器（升级改良)
'hpdlc:jet_propeller_gai': function (event,organ) {
    let player = event.entity
    let count = player.persistentData.getInt(resourceCount)
    if (player.abilities.flying){
        updateResourceCount(player, count - 30)
    }
},
//温度调节器
'hpdlc:thermostat': function (event,organ) {
    let player = event.entity
    let count = player.persistentData.getInt(resourceCount)
    let temperature = ColdSweat.getTemperature(player, 'body')
    if (count < 25)return
    if(temperature < 50 && temperature > -50)return
        ColdSweat.setTemperature(player, 'core', 0)
        updateResourceCount(player, count - 25)
},
//温度调节器(高温)
'hpdlc:thermostat_hot': function (event,organ) {
    let player = event.entity
    player.potionEffects.add('minecraft:fire_resistance', 20 * 3, 0)
},
//温度调节器(低温)
'hpdlc:thermostat_cold': function (event,organ) {
    let player = event.entity
    player.potionEffects.add('cold_sweat:ice_resistance', 20 * 3, 0)
},
//水车
'hpdlc:water_wheel1': function (event, organ) {
    let player = event.player
    let count = player.persistentData.getInt(resourceCount)
    let pos = organ.Slot
    let posMap = getPlayerChestCavityPosMap(player);
    fourDirectionList.forEach(direction => {
        let currentPos = lookPos(direction, pos)
        if (posMap.has(currentPos) && posMap.get(currentPos).id == 'minecraft:water_bucket') {
            updateResourceCount(player, count + 4)
        }
    })
    
},
//大型水车
'hpdlc:large_water_wheel1': function (event, organ) {
    let player = event.player
    let count = player.persistentData.getInt(resourceCount)
    let pos = organ.Slot
    let posMap = getPlayerChestCavityPosMap(player);
    fourDirectionList.forEach(direction => {
        let currentPos = lookPos(direction, pos)
        if (posMap.has(currentPos) && posMap.get(currentPos).id == 'minecraft:water_bucket') {
            updateResourceCount(player, count + 8)
        }
    })
    
},
//风车轴承
'hpdlc:windmill_bearing1': function (event, organ) {
    let player = event.player
    let count = player.persistentData.getInt(resourceCount)
    updateResourceCount(player, count + 16)
},
//氧气罐
'hpdlc:oxygen_cylinder1': function (event, organ) {
    let player = event.player
    let count = player.persistentData.getInt(resourceCount)
    if (player.nbt?.ForgeCaps['goety:lichdom']?.lichdom == 1) return
    let oldAirSupply = player.getAirSupply()
    if (oldAirSupply <= 150 && count >= 10) {
        player.setAirSupply(150)
        updateResourceCount(player, count - 10)
    }
},


}
var assign_organ_player_tick_only = Object.assign(organPlayerTickOnlyStrategies, hpdlcOrganPlayerTickOnlyStrategies);