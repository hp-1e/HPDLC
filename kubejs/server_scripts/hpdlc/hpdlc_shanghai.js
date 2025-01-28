// priority: 9

/**
 * 造成伤害唯一处理策略
 * 对应.tag('kubejs:damage_only')
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const hpdlcOrganPlayerDamageOnlyStrategies = {
 //测试
 'hpdlc:ceshi': function (event, organ, data) {
    let type = event.source.type
    let amount = event.amount
    let time = event.source.player.server.getTickCount()
    event.source.player.server.runCommandSilent(`say ${`造成伤害类型： ${type.toString()} ，伤害： ${amount.toString()} 点by ${time.toString()}Time`}`)    
},
//增幅装置——红石
'hpdlc:amplification_device_redstone': function (event, organ, data) {
    if (event.source.type != 'cataclysm.laser') return
        let player = event.source.player
        let count = player.persistentData.getInt(resourceCount)??0
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:machine')) {
        amplifier = amplifier + typeMap.get('kubejs:machine').length
     }
        if (typeMap.has('kubejs:resource')) {
        amplifier = amplifier + typeMap.get('kubejs:resource').length
    }
        let a = amplifier / 3
        let minoritem = player.offHandItem
        if ((minoritem?.id == 'cataclysm:laser_gatling')) {
                event.amount = event.amount * (1 + a + (count / 200))
        }
    },
//增幅装置——切割
'hpdlc:amplification_device_cutting': function (event, organ, data) {
    if (event.source.type != 'cataclysm.shredder' ) return
        let player = event.source.player
        let count = player.persistentData.getInt(resourceCount)??0
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:machine')) {
        amplifier = amplifier + typeMap.get('kubejs:machine').length
     }
        if (typeMap.has('kubejs:resource')) {
        amplifier = amplifier + typeMap.get('kubejs:resource').length
    } 
        let mainitem = player.mainHandItem
        if ((mainitem?.id == 'cataclysm:meat_shredder')) {
                event.amount = event.amount * (amplifier + (count / 100))
        }
    
    },
//增幅装置——雷球
'hpdlc:amplification_device_thunderball': function (event, organ, data) {
    if (event.source.type != 'irons_spellbooks.ball_lightning' ) return
    let player = event.source.player
    let count = player.persistentData.getInt(resourceCount)??0
    let a = hpGetComputingPower(player)
    if (count < a/10)return
    event.amount = event.amount * (1+a)*(1+a)
    updateResourceCount(player, count - Math.floor(a/10))
    },
//增幅装置——雷鸣长枪
'hpdlc:amplification_device_lightning_lance': function (event, organ, data) {
    if (event.source.type != 'irons_spellbooks.lightning_lance' ) return
    let player = event.source.player
    let count = player.persistentData.getInt(resourceCount)??0
    let a = hpGetComputingPower(player)
    if (count < a/10)return
    event.amount = event.amount * (1+a)*(1+a)
    updateResourceCount(player, count - Math.floor(a/10))
    },
//增幅装置——闪电风暴
'hpdlc:amplification_device_thunderstorm': function (event, organ, data) {
    if (event.source.type != 'irons_spellbooks.thunderstorm' ) return
    let player = event.source.player
    let count = player.persistentData.getInt(resourceCount)??0
    let a = hpGetComputingPower(player)
    if (count < a/10)return
    event.amount = event.amount * (1+a)
    updateResourceCount(player, count - Math.floor(a/10))
    },
//高级雷龙心脏
'hpdlc:lightning_dragon_heart1': function (event, organ, data) {
    let player = event.source.player
    let typeMap = getPlayerChestCavityTypeMap(player)
    let amplifier = 0
    if (typeMap.has('kubejs:dragon')) {
        amplifier = amplifier + typeMap.get('kubejs:dragon').length
     event.entity.invulnerableTime = 0.5 - amplifier * 0.5 / 20
    if (player.abilities.flying){
        event.amount = event.amount * 0.5
    }
}},
//微型分解工厂
'hpdlc:micro_processing_factory': function (event, organ, data) {
    let player = event.source.player
    let count = player.persistentData.getInt(resourceCount)??0
    if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) return
    player.addItemCooldown(organ.id, 2)
    updateResourceCount(player, count + 30)
    getPlayerMagicData(player).addMana(30)
},
//魂火
'hpdlc:soul_fire': function (event, organ, data) {
    if (event.source.type != 'arrow' ) return
    let random = Math.random()* 100 
     if(random >= 50){
            event.amount = event.amount * 2
     }
    },
//黄金之爱——蛮兵
'hpdlc:golden_love3': function (event, organ, data) {
    let player = event.source.player
    let maxHealth = player.getMaxHealth()
    let Health = player.getHealth()
    if (event.source.type != 'player' ) return
    if (player.getMainHandItem() != 'minecraft:golden_sword' && player.getMainHandItem() != 'minecraft:golden_axe' )return
            event.amount = (event.amount + maxHealth / 2 ) * (1 + Math.min((maxHealth - Health) / 10,3))
    },
//灾厄之魂——卫道士
'hpdlc:soul_disaster': function (event, organ, data) {
    let player = event.source.player
    let mainitem = player.mainHandItem
    if (mainitem.hasTag('forge:axes')){
        event.amount = event.amount * 1.4
    }
    if  (mainitem?.id == 'tetra:modular_double' && mainitem.nbt && mainitem.nbt.contains("double/annihilator_axe_left_material")){
        event.amount = event.amount * 1.4
    }
    },
//不稳定的火药
'hpdlc:gunpowder1': function (event, organ, data) {
    let player = event.source.player
    if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {
        return
    }
    player.addItemCooldown(organ.id, 2)
    if (event.source.type != 'arrow' ) return
    let a = player.getAttributeTotalValue('minecraft:generic.attack_damage')
    let explosion = event.entity.block.createExplosion()
    explosion.strength(3)
    explosion.destroysTerrain(false)
    explosion.explode()
    // 获取被攻击的实体
		let entity = event.entity
		// 获取周围实体
		let entityList = getLivingWithinRadius(entity.getLevel(), entity.position(), 4)
		// 遍历实体列表
		entityList.forEach(entity => {
			// 如果没有这个，会攻击到非生物实体，比如掉落物
			if (entity.isLiving()) {
				// 延迟一刻执行，这样可以让训练假人正常显示伤害
				entity.getServer().scheduleInTicks(1, () => {
                    event.entity.invulnerableTime = 0
					// 攻击,DamageSource为伤害源，后一个数值是伤害数值
					entity.attack(DamageSource.playerAttack(player), a / 2)
				})
			}
		})
    },
//未知的药水
'hpdlc:unknown_potion': function (event, organ, data) {
    let player = event.source.player
    let luck = player.getLuck()
    let random = Math.random() * 500
    if(84< random && random<=100){player.potionEffects.add('minecraft:strength', 20 * 60, Math.max(Math.floor(luck/5),0))}
    if(68< random && random<=84){player.potionEffects.add("minecraft:resistance", 20 * 60, Math.max(Math.floor(luck/50),0))}
    if(52< random && random<=68){player.potionEffects.add('minecraft:regeneration', 20 * 60, Math.max(Math.floor(luck/10),0))}
    if(36< random && random<=52){player.potionEffects.add('alexsmobs:orcas_might', 20 * 60, Math.max(Math.floor(luck/30),0))}
    if(20< random && random<=36){player.potionEffects.add('irons_spellbooks:vigor', 20 * 60, Math.max(Math.floor(luck/10),0))}
    if(10< random && random<=20){player.potionEffects.add('minecraft:hunger', 20 * 10, 0)}
    if(0< random && random<=10){player.potionEffects.add('minecraft:weakness', 20 * 10,0)}
    if(random < 0.01){
        event.source.player.tell ("你感觉你要死了")
        player.getServer().scheduleInTicks(20 * 100, () => {
            player.potionEffects.add("minecraft:instant_damage", 20 * 10,100)
        })
    }
    if(random > 499.99){
        player.potionEffects.add("minecraft:resistance", 20 * 600,4)
        event.source.player.tell ("你感觉你已经无敌了")
    }
    },
//诅咒？恩赐？
'hpdlc:curse_favor': function (event, organ, data) {
    let player = event.source.player;
    let attriMap = getPlayerAttributeMap(player)
    let luck = Math.max(player.getLuck(),1)
    let random = Math.random() * (100 + luck)
    let valuemax = attriMap.get(global.hpdlc_TEMP_ATTACK_UP.name)??0
    let countmax = attriMap.get(global.hpdlc_TEMP_MAX_MANA.name)??0
    //临时攻击力
    if (valuemax <= luck){
        let value
            if (random<=50) {
                value = -luck / 10
            }
            else {
                value = 10
            }
            if (attriMap.has(global.hpdlc_TEMP_ATTACK_UP.name)) {
                value = value + attriMap.get(global.hpdlc_TEMP_ATTACK_UP.name)
            }
                attriMap.set(global.hpdlc_TEMP_ATTACK_UP.name, value)
                player.modifyAttribute(global.hpdlc_TEMP_ATTACK_UP.key, global.hpdlc_TEMP_ATTACK_UP.name, value, global.hpdlc_TEMP_ATTACK_UP.operation);
                setPlayerAttributeMap(player, attriMap);
    }
    //临时魔法值上限
    if (countmax <= luck * 30){
        let count
            if (random<=50) {
                count = -luck / 5
            }
            if (random>50) {
                count = luck / 5
            }
            if (attriMap.has(global.hpdlc_TEMP_MAX_MANA.name)) {
                count = count + attriMap.get(global.hpdlc_TEMP_MAX_MANA.name)
            }
                attriMap.set(global.hpdlc_TEMP_MAX_MANA.name, count)
                player.modifyAttribute(global.hpdlc_TEMP_MAX_MANA.key, global.hpdlc_TEMP_MAX_MANA.name, count, global.hpdlc_TEMP_MAX_MANA.operation);
                setPlayerAttributeMap(player, attriMap);
    }
},
//龙炎动力臂
'hpdlc:fire_steam_powered_mechanical_arm': function (event, organ, data) {
    let player = event.source.player
    let count = player.persistentData.getInt(resourceCount) ?? 0
    if (count < 50){event.amount = event.amount * 0.5}
    else{
    if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {
        return
    }
    player.addItemCooldown(organ.id, 2)
    updateResourceCount(player, count - 20)}
    },
//凋零动力臂
'hpdlc:storm_steam_powered_mechanical_arm': function (event, organ, data) {
    let player = event.source.player
    let count = player.persistentData.getInt(resourceCount) ?? 0
    if (count < 70){event.amount = event.amount * 0.5}
    else{
    if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {
        return
    }
    player.addItemCooldown(organ.id, 2)
    updateResourceCount(player, count -30)}
    },
//喷气推进器（升级改良）
'hpdlc:jet_propeller_gai': function (event, organ, data) {
    let player = event.source.player
    if (player.abilities.flying){
        event.amount = event.amount * 0.5
    }
    },
//原初饥饿
'hpdlc:primordial_hungry': function (event, organ, data) {
    let player = event.source.player
    if (player.nbt?.ForgeCaps['goety:lichdom']?.lichdom == 1) return
    if (player.hasEffect('farmersdelight:nourishment'))return
    if (player.hasEffect('minecraft:hunger')){
        let effect = player.getEffect('minecraft:hunger')
        let amplifier = effect.getAmplifier()
        event.amount = event.amount * (1 + amplifier * 0.02)
    }
    if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {
        return
    }
    player.addItemCooldown(organ.id, 10)
    player.setFoodLevel(Math.max(player.getFoodLevel() - 3, 0))
    },
//僵尸之心
'hpdlc:zombie_heart': function (event,organ) {
    let entity = event.entity
    if (entity.hasEffect('minecraft:poison')) {
        // 获取已有的效果
        let effect = entity.getEffect('minecraft:poison')
        // 获取效果等级
        let amplifier = effect.getAmplifier()
        entity.potionEffects.add('minecraft:poison', 20 * 5,amplifier + 1)
    }
    else{
        entity.potionEffects.add('minecraft:poison', 20 * 5,0)
    }
}



}
var assign_organ_player_damage_only = Object.assign(organPlayerDamageOnlyStrategies, hpdlcOrganPlayerDamageOnlyStrategies);