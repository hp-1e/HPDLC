ServerEvents.recipes(event => {
//先驱者召唤
event.recipes.summoningrituals
.altar('kubejs:ritual_catalyst')
.id('hpdlc:the_harbinger_summon')
.mobOutput(
    SummoningOutput.mob('cataclysm:the_harbinger')
        .count(1)
        .offset(0, 3, 0)
        .spread(3, 0, 3)
        .data({ Health: 900, Attributes: [{ Name: 'generic.max_health', Base: 900 }] })
)

.input('2x minecraft:netherite_ingot')
.input('4x minecraft:wither_rose')
.input('2x art_of_forging:forged_steel_ingot')
.input('minecraft:nether_star')
.input('4x minecraft:redstone_block')
.input('2x cataclysm:witherite_ingot')
.recipeTime(200);
})