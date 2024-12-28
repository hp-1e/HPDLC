// priority: 9

/**
 * 获取机械飞升点数
 * @param {Internal.ServerPlayer} player 
 * @returns {Number}
 */
//借鉴墨染琴弦大佬的代码
function maGetComputingPower(player) {
    if (!player) return 0;
    let typeMap = getPlayerChestCavityTypeMap(player)
    let count = 0
    let onlySet = new Set()
    if (typeMap.has('kubejs:resource')) {
        count += typeMap.get('kubejs:resource').length
        typeMap.get('kubejs:machine').forEach(organ => {
            if (!onlySet.has(organ.id) && organ.id in maComputingPowerStrategies) {
                onlySet.add(organ.id)
                count += maComputingPowerStrategies[organ.id](player, organ)
            }
        });
    }
    return count
}

/**
 * 获取机械飞升点数处理策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer,organ):number>}
 */
const maComputingPowerStrategies = {
    //机械肋骨左
    'hpdlc:mechanical_ribs_zuo': function (player, organ) {
        return 3
    },
    //机械肋骨右
    'hpdlc:mechanical_ribs_yuo': function (player, organ) {
        return 3
    },
    //机械胃
    'hpdlc:jixiewei': function (player, organ) {
        return 3
    },
    //机械发条改
    'hpdlc:jixiefatiaogai': function (player, organ) {
        return 3
    },
    //简陋红色熔炉
    'hpdlc:primitive_redstone_furnace': function (player, organ) {
        return 3
    },
    //烈焰熔炉
    'hpdlc:flaming_furnace': function (player, organ) {
        return 3
    },
    //夜视仪
    'hpdlc:night_vision_device': function (player, organ) {
        return 3
    },
    //变速齿轮（三档）
    'hpdlc:gearbox3': function (player, organ) {
        return 3
    },
    //资源点库
    'hpdlc:energy_storage': function (player, organ) {
        return 3
    },
    //喷气推进器（升级改良）
    'hpdlc:jet_propeller_gai': function (player, organ) {
        return 3
    },
    //魔力转化器
    'hpdlc:magic_monverter': function (player, organ) {
        return 3
    },
    //微型心火核心
    'hpdlc:small_burning_heart': function (player, organ) {
        return 3
    },
    //后备隐藏能源
    'hpdlc:hidden_reserve_energy': function (player, organ) {
        return 3
    },
    //多功能机械臂
    'hpdlc:multi_functional_robotic_arm': function (player, organ) {
        return 3
    },
    //动力臂
    'hpdlc:steam_powered_mechanical_arm': function (player, organ) {
        return 3
    },
    //龙炎动力臂
    'hpdlc:fire_steam_powered_mechanical_arm': function (player, organ) {
        return 3
    },
    //凋零动力臂
    'hpdlc:storm_steam_powered_mechanical_arm': function (player, organ) {
        return 3
    },
    //纳米修复昆虫
    'hpdlc:nanorepair_insect': function (player, organ) {
        return 3
    },
    //精细机械手
    'hpdlc:precision_manipulator': function (player, organ) {
        return 3
    },
    //增幅装置——红石
    'hpdlc:amplification_device_redstone': function (player, organ) {
        return 3
    },
    //净化装置
    'hpdlc:cleaning_device': function (player, organ) {
        return 3
    },
    //机械盾牌
    'hpdlc:mechanical_shield': function (player, organ) {
        return 3
    },
    //可充能式不死图腾
    'hpdlc:charged_totem_of_undying': function (player, organ) {
        return 3
    },
    //增幅装置——切割
    'hpdlc:amplification_device_cutting': function (player, organ) {
        return 3
    },
    //微型加工工厂
    'hpdlc:micro_processing_factory': function (player, organ) {
        return 3
    },
    //穿梭器
    'hpdlc:chuansuo': function (player, organ) {
        return 3
    },
    //粉碎机
    'hpdlc:pulverizer1': function (player, organ) {
        return 3
    },
    //新生维度
    'hpdlc:newborn_dimension': function (player, organ) {
        if (organ.tag?.hpdlcforgeTimes) {
            let value = organ.tag.hpdlcforgeTimes 
            return value
        }
        else{
            return 0
        }
    },
}
/**
 * 计算麦乐鸡器官个数
 * @param {Internal.ServerPlayer} player 
 * @returns {Number}
 */
function mafoodGetComputingPower(player) {
    if (!player) return 0;
    let typeMap = getPlayerChestCavityTypeMap(player)
    let count = 0
    let onlySet = new Set()
        typeMap.get('kubejs:food').forEach(organ => {
            if (!onlySet.has(organ.id) && organ.id in mafoodComputingPowerStrategies) {
                onlySet.add(organ.id)
                count += mafoodComputingPowerStrategies[organ.id](player, organ)
            }
        });
    return count
}
const mafoodComputingPowerStrategies = {
    //肝
    'hpdlc:chicken_liver': function (player, organ) {
        return 1
    },
    //阑尾
    'hpdlc:chicken_appendix': function (player, organ) {
        return 1
    },
    //脾
    'hpdlc:chicken_spleen': function (player, organ) {
        return 1
    },
    //心
    'kubejs:chicken_heart': function (player, organ) {
        return 1
    },
    //肾
    'kubejs:chicken_kidney': function (player, organ) {
        return 1
    },
    //肺
    'kubejs:chicken_lung': function (player, organ) {
        return 1
    },
    //胃
    'hpdlc:chicken_stomach': function (player, organ) {
        return 1
    },
    //肠
    'hpdlc:chicken_intestine': function (player, organ) {
        return 1
    },
    //条
    'kubejs:chicken_strip': function (player, organ) {
        return 1
    },
    //全家桶
    'hpdlc:chicken_family': function (player, organ) {
        return 1
    },
}