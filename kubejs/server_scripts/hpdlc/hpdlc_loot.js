// priority: 9

/**
 * 器官实体掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const hpdlcEntityLootOnlyStrategies = {
    //微型分解工厂
    'hpdlc:micro_processing_factory': function (event, organ) {
        let player = event.getPlayer()
        let count = 1
        let a = hpGetComputingPower(player)
        while (a--) {
            if (Math.random() < 0.025) {
                count++
            }
        }
        event.loot.forEach(loot => {
            loot.setCount(loot.getCount() * count)
        })
    },

}
var assign_entity_loot_only = Object.assign(entityLootOnlyStrategies, hpdlcEntityLootOnlyStrategies);

/**
 * 器官箱子掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const hpdlcChestLootOnlyStrategies = {
    //阑尾型麦乐鸡
    'hpdlc:chicken_appendix': function (event, organ) {
        let player = event.player
        let luck = Math.max(player.getLuck(), 1)
        let random = Math.random() * 110
        let level = Math.floor(Math.random() * 1.5 * luck / 5) 
        if (Math.random() * 100 < 10 + luck / 5){
            if(100< random && random<=110){event.removeLoot(ItemFilter.ALWAYS_TRUE)}
            if(95< random && random<=100){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:protection', level)) }
            if(90< random && random<=95){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', level)) }
            if(85< random && random<=90){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:looting', level))}
            if(80< random && random<=85){event.addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', level)) }
            if(75< random && random<=80){event.addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', level)) }

            if(70< random && random<=75){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', level)) }
            if(65< random && random<=70){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:aqua_affinity', level))}
            if(60< random && random<=65){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', level)) }
            if(55< random && random<=60){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', level)) }
            if(50< random && random<=55){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:soul_speed', level)) }

            if(45< random && random<=50){event.addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', level)) }
            if(40< random && random<=45){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:swift_sneak', level)) }
            if(35< random && random<=40){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', level)) }
            if(30< random && random<=35){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:smite', level)) }
            if(25< random && random<=30){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', level)) }

            if(20< random && random<=25){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', level)) }
            if(15< random && random<=20){event.addLoot( Item.of('minecraft:enchanted_book').enchant('kubejs:tele_operation', level)) }
            if(10< random && random<=15){event.addLoot( Item.of('minecraft:enchanted_book').enchant('kubejs:tele_operation', level)) }
            if(5< random && random<=10){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:mending', level)) }
            if(0< random && random<=5){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:power', level)) }
        }
    },
}

var assign_chest_loot_only = Object.assign(chestLootOnlyStrategies, hpdlcChestLootOnlyStrategies);