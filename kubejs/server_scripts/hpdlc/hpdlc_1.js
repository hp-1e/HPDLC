//飞行
//借鉴墨染琴弦的代码
PlayerEvents.tick(event => {
    let player = event.player
    if (event.level.isClientSide()) return
    if (player.age % 5 != 0) return
    if (!player.getPersistentData().getBoolean('hpdlcjetpropellergai1')) {
        return
    }
    player.onUpdateAbilities()
    let playerChest = getPlayerChestCavityItemMap(player)
    if (!playerChest.has('hpdlc:jet_propeller_gai')) {
        player.abilities.mayfly = false
        player.abilities.flying = false
        player.onUpdateAbilities()
        player.getPersistentData().putBoolean('hpdlcjetpropellergai1', false)
    }
    else {
        player.abilities.mayfly = true
        player.onUpdateAbilities()
    }
})

//高级雷龙心脏飞行
//借鉴墨染琴弦的代码
PlayerEvents.tick(event => {
    let player = event.player
    if (event.level.isClientSide()) return
    if (player.age % 5 != 0) return
    if (!player.getPersistentData().getBoolean('hpdlcjetpropellergai2')) {
        return
    }
    player.onUpdateAbilities()
    let playerChest = getPlayerChestCavityItemMap(player)
    if (playerChest.has('hpdlc:lightning_dragon_heart1')) {
        if (playerChest.has('hpdlc:fire_dragon_heart1')) {
            if (playerChest.has('hpdlc:ice_dragon_heart1')) {
                player.abilities.mayfly = true
                player.onUpdateAbilities()
    }}}
    else {
        player.abilities.mayfly = false
            player.abilities.flying = false
            player.onUpdateAbilities()
            player.getPersistentData().putBoolean('hpdlcjetpropellergai2', false)
    }
})

// 只有当玩家手持开胸器并打开gui界面的时候才触发初始化效果
PlayerEvents.inventoryClosed((event) => {
    let player = event.player
    if (!player.mainHandItem.hasTag('kubejs:chest_opener') && !player.offHandItem.hasTag('kubejs:chest_opener')) {
        return
    }
    global.initChestCavityIntoMap(player, true)
    let itemMap = getPlayerChestCavityItemMap(player)
    if (player.persistentData.contains(organActive) && player.persistentData.getInt(organActive) == 1) {
        return
    }
    if (itemMap.has('hpdlc:cpu1')|| itemMap.has('hpdlc:soul_chip')) {
        global.updatePlayerActiveStatus(event.player)
        player.persistentData.putInt(organActive, 1)
    }
});
//采集锤最大连锁方块
const MultipleBlockConfig = {
    maxMultiple : 20,
}
