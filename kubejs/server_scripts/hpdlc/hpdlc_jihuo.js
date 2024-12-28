// priority: 9

/**
 * 器官激活策略
 * 对应.tag('kubejs:active')
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const hpdlcorganActiveStrategies = {
    //资源库
    'hpdlc:energy_storage': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 300)
    },

    //烈焰熔炉
    'hpdlc:flaming_furnace': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 100)
    },

    //喷气推进器（升级改良）
    'hpdlc:jet_propeller_gai': function (player, organ, attributeMap) {
        //飞行代码这里不全，搜索hpdlcjetpropellergai看另一部分
            player.getPersistentData().putBoolean('hpdlcjetpropellergai1', true)
            player.abilities.mayfly = true
            player.onUpdateAbilities()
    },
    //玫瑰脊柱
    'hpdlc:rose_quartz_spine': function (player, organ, attributeMap) {
        let playerChestInstance = player.getChestCavityInstance()
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier += typeMap.get('kubejs:rose').length
        }
        playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'nerves'), new $Float(playerChestInstance.getOrganScores().get(new ResourceLocation('chestcavity', 'nerves')) + amplifier))
    },
    //凋零玫瑰肌束
    'hpdlc:wither_rose_quartz_muscle': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length
        }
        let value = amplifier
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, value)
    },
    //风暴玫瑰肌束
    'hpdlc:storm_rose_quartz_muscle': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length * 5
        }
        let value = amplifier
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, value)
    },
    //凋零玫瑰肝脏
    'hpdlc:wither_rose_quartz_liver': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length
        }
        let value = amplifier * 40
        attributeMapValueAddition(attributeMap, global.MAX_MANA, value)
    },
     //风暴玫瑰肝脏
     'hpdlc:storm_rose_quartz_liver': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length
        }
        let value = amplifier * 200
        attributeMapValueAddition(attributeMap, global.MAX_MANA, value)
    },
    //凋零玫瑰心脏
    'hpdlc:wither_rose_quartz_heart': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length
        }
        let value = amplifier
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, value)
    },
    //风暴玫瑰心脏
    'hpdlc:storm_rose_quartz_heart': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length
        }
        let value = amplifier * 5
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, value)
    },
    //末影核心
    'hpdlc:ender_pearl1': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.hpdlc_ENDER_SPELL_POWER,0.1)
    },

}
var assign_organ_active = Object.assign(organActiveStrategies, hpdlcorganActiveStrategies)

/**
 * 器官激活唯一策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const hpdlcorganActiveOnlyStrategies = {
    
    //中枢芯片
    'hpdlc:cpu1': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:machine')) {
                amplifier = amplifier + typeMap.get('kubejs:machine').length
     }
        let a = amplifier * 3
        let b = amplifier * 3
        let c = amplifier * 20
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, a)
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, b)
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + c)
        },
    //灵魂芯片
    'hpdlc:soul_chip': function (player, organ, attributeMap) {
        let a = maGetComputingPower(player)
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, a * 5)
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, a * 5)
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + a * 50)
    },
    //机械肋骨（左）
        'hpdlc:mechanical_ribs_zuo': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        // 取对称位置坐标
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'hpdlc:mechanical_ribs_yuo') {
            attributeMapValueAddition(attributeMap, global.ARMOR,Math.round(10))
        }
    },
    //机械肋骨（右）
        'hpdlc:mechanical_ribs_yuo': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        // 取对称位置坐标
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'hpdlc:mechanical_ribs_zuo') {
            attributeMapValueAddition(attributeMap, global.ARMOR_TOUGHNESS, Math.round(10))
        }
    },
    //后备隐藏能源
    'hpdlc:hidden_reserve_energy': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 1000)
    },
    //多功能机械臂
    'hpdlc:multi_functional_robotic_arm': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.ATTACK_RANGE, 6)
        attributeMapValueAddition(attributeMap, global.REACH_DISTANCE, 6)
    },
    //高级火龙心脏
    'hpdlc:fire_dragon_heart1': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:dragon')) {
                amplifier = amplifier + typeMap.get('kubejs:dragon').length
     }
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, amplifier * 20)
        attributeMapValueAddition(attributeMap, global.FIRE_SPELL_POWER, amplifier * 0.5)
    },
    //高级冰龙心脏
    'hpdlc:ice_dragon_heart1': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:dragon')) {
                amplifier = amplifier + typeMap.get('kubejs:dragon').length
     }
        attributeMapValueAddition(attributeMap, global.SPELL_POWER, amplifier * 0.25)
        attributeMapValueAddition(attributeMap, global.ICE_SPELL_POWER, amplifier * 0.5)
    },
     //高级雷龙心脏
     //飞行代码这里不全，搜索hpdlcjetpropellergai看另一部分
     'hpdlc:lightning_dragon_heart1': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let playerChest = getPlayerChestCavityItemMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:dragon')) {
                amplifier = amplifier + typeMap.get('kubejs:dragon').length
     }
        attributeMapValueAddition(attributeMap,global.hpdlc_LIGHTNING_SPELL_POWER, amplifier * 0.5)
        if (playerChest.has('hpdlc:fire_dragon_heart1')) {
            if (playerChest.has('hpdlc:ice_dragon_heart1')) {
                player.getPersistentData().putBoolean('hpdlcjetpropellergai2', true)
                player.abilities.mayfly = true
                player.onUpdateAbilities()
            }
        }
    },
    //可充能式不死图腾
    'hpdlc:charged_totem_of_undying': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 500)
    },
    //动力臂
    'hpdlc:steam_powered_mechanical_arm': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:resource')) {
                amplifier = amplifier + typeMap.get('kubejs:resource').length
     }
        attributeMapValueAddition(attributeMap, global.ATTACK_UP_MULTI_BASE, amplifier * 0.01)
},
    //龙炎动力臂
    'hpdlc:fire_steam_powered_mechanical_arm': function (player, organ, attributeMap) {
        let a = maGetComputingPower(player)??0
        attributeMapValueAddition(attributeMap, global.ATTACK_UP_MULTI_BASE, a * 0.05)
},
    //凋零动力臂
    'hpdlc:storm_steam_powered_mechanical_arm': function (player, organ, attributeMap) {
        let a = maGetComputingPower(player)??0
        attributeMapValueAddition(attributeMap, global.ATTACK_UP_MULTI_BASE, a * 0.1)
},
    //麦乐鸡全家桶
    'hpdlc:chicken_family': function (player, organ, attributeMap) {
        let a = mafoodGetComputingPower(player)??0
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, a * 5)
        attributeMapValueAddition(attributeMap, global.ATTACK_UP_MULTI_BASE, a * 0.2)
},
    //风暴玫瑰肌束
    'hpdlc:storm_rose_quartz_muscle': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:hpdlc_storm')) {
            amplifier = amplifier + typeMap.get('kubejs:hpdlc_storm').length * 0.01
        }
        let value = amplifier
        attributeMapValueAddition(attributeMap, global.hpdlc_HEALTH_UP , -value)
    },
}
var assign_organ_active_only = Object.assign(organActiveOnlyStrategies, hpdlcorganActiveOnlyStrategies)