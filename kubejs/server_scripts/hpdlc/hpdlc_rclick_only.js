// priority: 9

/**
 * 器官右键事件唯一策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const hpdlcorganRightClickedOnlyStrategies = {
    //简陋红石熔炉
    'hpdlc:primitive_redstone_furnace': function (event, organ) {
        if (event.item == 'minecraft:coal' || event.item == 'minecraft:charcoal') {
        let player = event.player
        let count = 50;
        if (player.persistentData.contains(resourceCount)) {
            count = player.persistentData.getInt(resourceCount) + count;
        }
        updateResourceCount(player, count)
        player.swing()
        event.item.shrink(1)
    }
    },
    //烈焰熔炉
    'hpdlc:flaming_furnace': function (event, organ) {
        if (event.item != 'minecraft:blaze_rod') {
            return
        }
        let player = event.player
        let count = 1000;
        if (player.persistentData.contains(resourceCount)) {
            count = player.persistentData.getInt(resourceCount) + count;
        }
        updateResourceCount(player, count)
        player.swing()
        event.item.shrink(1)
    },
    //钢铁外壳
    'hpdlc:steel_shell': function (event, organ) {
        if (event.item != 'minecraft:iron_ingot') {
            return
        }
        let player = event.player
        let a = player.chestCavityInstance.organScores.getOrDefault(new ResourceLocation('chestcavity', 'iron_repair'), 0)
            player.heal(a)
            player.swing()
            event.item.shrink(1)
    },
    //温度调节器(高温) 
    'hpdlc:thermostat_hot': function (event, organ) {
        if (event.item != 'minecraft:lava_bucket') {
            return
        }
        let player = event.player
        player.potionEffects.add('kubejs:heat_up', 20 * 1800, 19)
            player.swing()
            event.item.shrink(1)
            player.give(Item.of('minecraft:bucket').withCount(1))
    },
    //温度调节器(低温)
    'hpdlc:thermostat_cold': function (event, organ) {
        if (event.item != 'minecraft:powder_snow_bucket') {
            return
        }
        let player = event.player
        player.potionEffects.add('kubejs:cold_down', 20 * 1800, 19)
            player.swing()
            event.item.shrink(1)
            player.give(Item.of('minecraft:bucket').withCount(1))
    },
    //引雷针
    'hpdlc:lightning_rod1': function (event, organ) {
        if (event.item != 'minecraft:copper_block') {
            return
        }
        let player = event.player
        player.swing()
        event.item.shrink(1)
        //获取自身攻击力
        let a = player.getAttributeTotalValue('minecraft:generic.attack_damage')
        // 获取周围实体
		let entityList = getLivingWithinRadius(player.getLevel(), player.position(), 5)
		// 遍历实体列表
		entityList.forEach(entity => {
        //排除掉落物
		if (entity.isLiving()) {
            //创建实体
            let lightning_bolt = entity.level.createEntity("minecraft:lightning_bolt")
            lightning_bolt.setPosition(entity .x, entity .y, entity .z)
            //生成实体
            lightning_bolt.spawn()
            //排除玩家
            if (entity.isPlayer()) return
            //造成伤害，伤害来源为玩家
            entity.attack(DamageSource.playerAttack(player), a )
			}
		})
    },
}
var assign_organ_right_clicked_only = Object.assign(organRightClickedOnlyStrategies, hpdlcorganRightClickedOnlyStrategies)
