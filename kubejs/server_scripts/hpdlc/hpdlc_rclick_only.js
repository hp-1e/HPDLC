// priority: 9

/**
 * 器官右键事件唯一策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const hpdlcorganRightClickedOnlyStrategies = {
    //简陋红石熔炉
    'hpdlc:primitive_redstone_furnace': function (event, organ) {
        if (event.item != 'minecraft:coal') {
            return
        }
        let player = event.player
        let count = 50;
        if (player.persistentData.contains(resourceCount)) {
            count = player.persistentData.getInt(resourceCount) + count;
        }
        updateResourceCount(player, count)
        player.swing()
        event.item.shrink(1)
    },
    //烈焰熔炉
    'hpdlc:flaming_furnace': function (event, organ) {
        if (event.item != 'minecraft:blaze_rod') {
            return
        }
        let player = event.player
        let count = 500;
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
            player.heal(a * 3)
            player.swing()
            event.item.shrink(1)
    },
}
var assign_organ_right_clicked_only = Object.assign(organRightClickedOnlyStrategies, hpdlcorganRightClickedOnlyStrategies)
