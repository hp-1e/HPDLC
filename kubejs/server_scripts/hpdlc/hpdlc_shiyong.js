// priority: 9

/**
 * 器官食物食用唯一策略
 * 对应.tag('kubejs:eat_effect_only')
 * @constant
 * @type {Object<string,function(Internal.FoodEatenEventJS, organ):void>}
 */
const hpdlcOrganFoodEatenOnlyStrategies = {
    // 示例器官-唯一食用
    'hpdlc:chicken_stomach': function (event, organ) {
        let player = event.player
        let nutrition = event.item.item.foodProperties.nutrition
        let staturation =event.item.item.foodProperties.saturationModifier
        player.potionEffects.add('minecraft:luck', nutrition * 1000, staturation * 10)
    },
}

var assign_organ_food_eaten_only = Object.assign(organFoodEatenOnlyStrategies, hpdlcOrganFoodEatenOnlyStrategies);