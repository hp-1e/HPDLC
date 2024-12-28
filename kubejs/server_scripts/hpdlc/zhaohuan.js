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

.input('8x biomancy:creator_mix')
.input('16x minecraft:wither_rose')
.input('minecraft:nether_star')
.recipeTime(200);
})